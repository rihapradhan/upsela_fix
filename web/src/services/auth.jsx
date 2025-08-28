// services/auth.js
import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.WP_BASE_URL;
const WORDPRESS_USERNAME = process.env.WORDPRESS_USERNAME;
const WORDPRESS_PASSWORD = process.env.WORDPRESS_PASSWORD;

export const useAuthentication = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const authenticate = () => {
    return axios
      .post(`${API_BASE_URL}/wp-json/jwt-auth/v1/token`, {
        username: WORDPRESS_USERNAME,
        password: WORDPRESS_PASSWORD,
      })
      .then((response) => {
        const { token, refreshToken } = response.data;

        // Store token and refresh token in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);

        setToken(token);

        return { token, refreshToken };
      })
      .catch((error) => {
        console.error('Authentication error:', error);
        throw error;
      });
  };

  const refreshToken = (refreshToken) => {
    return axios
      .post(`${API_BASE_URL}/jwt-auth/v1/token/refresh`, {
        refreshToken,
      })
      .then((response) => {
        const { token } = response.data;

        // Store refreshed token in local storage
        localStorage.setItem('token', token);

        return { token };
      })
      .catch((error) => {
        console.error('Token refresh error:', error);
        throw error;
      });
  };



  const getAllPosts = () => {
    return axios
      .get(`${API_BASE_URL}/wp-json/wp/v2/posts?_embed`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Get all posts error:', error);

        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all posts with the new token
              return getAllPosts();
            });
          }
        }

        throw error;
      });
  };

  const getLatestThreePost = () => {
    return axios
      .get(`${API_BASE_URL}/wp-json/wp/v2/posts?_embed&categories_exclude=1,13,12&order=desc&orderby=date&per_page=3`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Get all posts error:', error);

        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all posts with the new token
              return getLatestThreePost();
            });
          }
        }

        throw error;
      });
  };

  const getPopularPostsByTag = () => {
    return axios
      .get(`${API_BASE_URL}/wp-json/custom/v1/popular-posts-by-tag`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Get all popular posts error:', error);

        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all popular posts with the new token
              return getPopularPostsByTag();
            });
          }
        }

        throw error;
      });
  };

  const getAllCategories = () => {
    return axios.get(`${API_BASE_URL}/wp-json/custom/v1/all-categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Get all categories error:', error);

        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all popular posts with the new token
              return getPopularPostsByTag();
            });
          }
        }
        throw error;
      });
  };

  const getLatestPostsByCategory = (categoryID) => {
    return axios
      .get(`${API_BASE_URL}/wp-json/custom/v1/latest-posts-by-category/?category_id=${categoryID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const totalPages = Number(response.headers['x-wp-totalpages']);
        const posts = response.data;
        return { posts, totalPages };
      })
      .catch((error) => {
        console.error('Get video posts error:', error);

        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all popular posts with the new token
              return getLatestPostsByCategory(categoryID, refreshedTokenData.token);
            });
          }
        }

        throw error;
      });
  };




  const getPostsByPage = (page = 1, categoryFilter = null, dateFilter = null) => {
    let url = `${API_BASE_URL}/wp-json/wp/v2/posts?_embed&categories_exclude=1,13,12&orderby=date`;

    if (categoryFilter) {
      url += `&categories=${categoryFilter}`;
    }

    if (dateFilter) {
      // Add logic to handle the date filter based on the selected value
      const currentDate = new Date();
      let startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      switch (dateFilter) {
        case 'Today':
          startDate = currentDate;
          break;
        case 'Last7Days':
          startDate.setDate(currentDate.getDate() - 7);
          break;
        case 'Last30Days':
          startDate.setDate(currentDate.getDate() - 30);
          break;
        default:
          break;
      }

      // Adjust the time to the end of the day for 'Today'
      if (dateFilter === 'Today') {
        // Calculate the next day to include all posts from the selected day
        const nextDay = new Date(startDate);
        nextDay.setDate(nextDay.getDate() + 1);

        // Format dates as strings without time
        const startDateString = startDate.toISOString().split('T')[0];
        const nextDayString = nextDay.toISOString().split('T')[0];

        url += `&after=${startDateString}T00:00:00&before=${nextDayString}T00:00:00`;
      } else {
        url += `&after=${startDate.toISOString()}`;
        // Make the API request here
      }
    }

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        const totalPages = Number(response.headers['x-wp-totalpages']);
        const posts = response.data;
        return { posts, totalPages };
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all posts with the new token
              return getPostsByPage(page, categoryFilter);
            });
          }
        }
        throw error;
      });
  };

  const getPostById = (postId) => {
    // Fetch post details
    const postRequest = axios.get(`${API_BASE_URL}/wp-json/wp/v2/posts/${postId}?_embed`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Fetch post categories
    const categoriesRequest = axios.get(`${API_BASE_URL}/wp-json/wp/v2/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        post: postId, // Filter categories based on the post ID
      },
    });

    return Promise.all([postRequest, categoriesRequest])
      .then(([postResponse, categoriesResponse]) => {
        const post = postResponse.data;
        const categoryNames = categoriesResponse.data.map(category => category.name);

        return { ...post, categoryNames };
      })
      .catch((error) => {
        console.error(`Error fetching post with ID ${postId}:`, error);
        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all posts with the new token
              return getPostById(postId);
            });
          }
        }
        throw error;
      });
  };

  const getJobById = (jobId) => {
    // Fetch post details
    const jobRequest = axios.get(`${API_BASE_URL}/wp-json/custom/v1/job/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    return Promise.all([jobRequest])
      .then(([jobResponse]) => {
        const job = jobResponse.data;

        return { ...job };
      })
      .catch((error) => {
        console.error(`Error fetching job with ID ${jobId}:`, error);
        if (error.response && error.response.status === 401) {
          // Token expired, attempt to refresh it
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return refreshToken(refreshToken).then((refreshedTokenData) => {
              setToken(refreshedTokenData.token);

              // Retry the get all posts with the new token
              return getJobById(jobId);
            });
          }
        }
        throw error;
      });
  };

  return { authenticate, refreshToken, getPostsByPage, getAllPosts, getPostById, getJobById,getLatestThreePost, getPopularPostsByTag, getLatestPostsByCategory, getAllCategories };
};
