import { useEffect, useRef, useState } from 'react'

import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Select from 'react-select'
import { BeatLoader } from 'react-spinners'

import { Link, routes } from '@redwoodjs/router'
import { Metadata, MetaTags } from '@redwoodjs/web'

import BlogInfo from 'src/components/BlogInfo/BlogInfo'
import BlogSlider from 'src/components/BlogSlider/BlogSlider'
import BtnLink from 'src/components/BtnLink/BtnLink'
import CaseStudy from 'src/components/CaseStudy/CaseStudy'
import Footer from 'src/components/Footer/Footer'
import VideoInfo from 'src/components/VideoInfo/VideoInfo'
import { useAuthentication } from 'src/services/auth'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import 'react-loading-skeleton/dist/skeleton.css'

const BlogsPage = () => {
  const {
    authenticate,
    getPostsByPage,
    getLatestPostsByCategory,
    getAllCategories,
    getLatestThreePost,
  } = useAuthentication()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [posts, setPosts] = useState([])
  const [latestPosts, setLatestPosts] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingInsights, setLoadingInsights] = useState(true)
  const [categories, setCategories] = useState([])
  // const { jsonData } = useSharedData();
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  // const blogData = jsonData.blogData
  // const videoContent = jsonData.videoContent;

  const dateOptions = [
    { value: 'Today', label: 'Today' },
    { value: 'Last7Days', label: 'Last 7 Days' },
    { value: 'Last30Days', label: 'Last 30 Days' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        await authenticate()
        // Fetch the first page of posts (8 posts)
        const { posts: firstPagePosts, totalPages: total } =
          await getPostsByPage(1)
        setPosts(firstPagePosts)
        setTotalPages(total)
        const categoriesData = await getAllCategories()
        setCategories(categoriesData)
        const latest3Posts = await getLatestThreePost()
        setLatestPosts(latest3Posts)
        const { posts: firstVideoPosts, totalPages: videoTotal } =
          await getLatestPostsByCategory(13)
        setVideos(firstVideoPosts)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleCategoryChange = async (selectedOption) => {
    try {
      setLoadingInsights(true)
      setSelectedCategory(selectedOption)

      // Fetch posts for the selected category
      const { posts: newPosts } = await getPostsByPage(
        1,
        selectedOption ? selectedOption.value : null,
        selectedDate ? selectedDate.value : null
      )

      setPosts(newPosts)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoadingInsights(false)
    }
  }
  const handleDateChange = async (selectedOption) => {
    try {
      setLoadingInsights(true)
      setSelectedDate(selectedOption)

      // Fetch posts for the selected date and category
      const { posts: newPosts } = await getPostsByPage(
        1,
        selectedCategory ? selectedCategory.value : null,
        selectedOption ? selectedOption.value : null
      )
      setPosts(newPosts)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoadingInsights(false)
    }
  }
  const handlePageChange = async (page) => {
    try {
      setLoading(true)

      const { posts: newPosts } = await getPostsByPage(page)
      setPosts(newPosts)
      setCurrentPage(page)

      setLoading(false)
    } catch (error) {
      console.error('Error fetching posts for page:', error)
      setLoading(false)
    }
  }
  return (
    <>
      <MetaTags title="Blogs" description="Blogs" />
      <div className="p-t-80">
        {/* <div className="blog-page"> */}
        {/* <div className="blog-slider-wrap">
            <BlogSlider />
          </div> */}

        {loading ? (
          <div className={`blog-info`}>
            <div className="container">
              <div className="grid grid-blog-info">
                <div className="grid-item">
                  <h2>{<Skeleton width={200} count={2} />}</h2>
                </div>
                <div className="grid-item grid-blog-border">
                  <div className="blog-info-list">
                    <div className="blog-info-item">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            <p>{<Skeleton count={3} />}</p>
                            <div className="btn-outer text-right">
                              {<Skeleton width={200} count={2} />}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                            <p>{<Skeleton count={3} />}</p>
                            <div className="btn-outer text-right">
                              {<Skeleton width={200} count={2} />}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                            <p>{<Skeleton count={3} />}</p>
                            <div className="btn-outer text-right">
                              {<Skeleton width={200} count={2} />}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`blog-info null overflow m-b-80`}>
            <div className="container">
              <div className="grid grid-blog-info">
                <div className="grid-item">
                  <div className="grid-blog-info-block ">
                    <h2>Blog</h2>
                    <Select
                      options={[
                        { value: null, label: 'Select a date' },
                        ...dateOptions,
                      ]}
                      onChange={handleDateChange}
                      value={selectedDate}
                      isSearchable={false} // If you don't want a searchable dropdown
                      placeholder="Date Posted"
                    />
                    <Select
                      options={[
                        { value: null, label: 'Category' },
                        ...categories,
                      ]}
                      onChange={handleCategoryChange}
                      value={selectedCategory}
                      placeholder="Category"
                      isSearchable={true}
                      className="m-t-10"
                    />
                  </div>
                </div>
                {selectedCategory || selectedDate ? (
                  <div>
                    {loadingInsights ? (
                      // Loading skeleton for the selected category's <BlogInfo>
                      <div className={`blog-info`}>
                        <div className="container">
                          <div className="grid-item grid-blog-border">
                            <div className="blog-info-list">
                              <div className="blog-info-item">
                                <div className="row">
                                  <div className="col-md-7">
                                    <div className="blog-content-left">
                                      <p>{<Skeleton count={3} />}</p>
                                      <div className="btn-outer text-right">
                                        {<Skeleton width={200} count={2} />}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <Skeleton height={200} width={300} />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-7">
                                    <div className="blog-content-left">
                                      {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                                      <p>{<Skeleton count={3} />}</p>
                                      <div className="btn-outer text-right">
                                        {<Skeleton width={200} count={2} />}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <Skeleton height={200} width={300} />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-7">
                                    <div className="blog-content-left">
                                      {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                                      <p>{<Skeleton count={3} />}</p>
                                      <div className="btn-outer text-right">
                                        {<Skeleton width={200} count={2} />}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <Skeleton height={200} width={300} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {posts.length > 0 ? (
                          // Render <BlogInfo> if posts are found
                          <BlogInfo
                            postData={posts}
                            isTitle={true}
                            isButton={true}
                            isVideo={false}
                            isScrollable={true}
                          />
                        ) : (
                          // Display "Post not found" if posts array is empty
                          <div className="blog-info">
                            <div className="blog-info-list">
                              <div className="blog-info-item">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="blog-content-left">
                                      <h3>Post not found</h3>
                                      <p>
                                        Sorry, the requested post could not be
                                        found. Please try again or explore other
                                        posts.
                                      </p>
                                      {/* You can customize the message as needed */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  // Render <BlogInfo> for the initially loaded content
                  <>
                    {posts.length > 0 ? (
                      // Render <BlogInfo> if posts are found
                      <BlogInfo
                        postData={posts}
                        isTitle={true}
                        isButton={true}
                        isVideo={false}
                        isScrollable={true}
                      />
                    ) : (
                      // Display "Post not found" if posts array is empty
                      <p>Post not found.</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className={`blog-info`}>
            <div className="container">
              <div className="grid grid-blog-info">
                <div className="grid-item">
                  <h2>{<Skeleton width={200} count={2} />}</h2>
                </div>
                <div className="grid-item grid-blog-border">
                  <div className="blog-info-list">
                    <div className="blog-info-item">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            <p>{<Skeleton count={3} />}</p>
                            <div className="btn-outer text-right">
                              {<Skeleton width={200} count={2} />}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                            <p>{<Skeleton count={3} />}</p>
                            <div className="btn-outer text-right">
                              {<Skeleton width={200} count={2} />}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                            <p>{<Skeleton count={3} />}</p>
                            <div className="btn-outer text-right">
                              {<Skeleton width={200} count={2} />}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`blog-info null overflow`}>
            <div className="container">
              <div className="grid grid-blog-info">
                <div className="grid-item">
                  <div className="grid-blog-info-block">
                    <h2>Latest Insights</h2>
                    {/* <Select
                      options={[
                        { value: null, label: 'Select a date' },
                        ...dateOptions,
                      ]}
                      onChange={handleDateChange}
                      value={selectedDate}
                      isSearchable={false} // If you don't want a searchable dropdown
                      placeholder="Date Posted"
                    />
                    <Select
                      options={[
                        { value: null, label: 'Category' },
                        ...categories,
                      ]}
                      onChange={handleCategoryChange}
                      value={selectedCategory}
                      placeholder="Category"
                      isSearchable={true}
                      className="m-t-10"
                    /> */}
                  </div>
                </div>

                <div>
                  {loading ? (
                    // Loading skeleton for the selected category's <BlogInfo>
                    <div className={`blog-info`}>
                      <div className="container">
                        <div className="grid-item grid-blog-border">
                          <div className="blog-info-list">
                            <div className="blog-info-item">
                              <div className="row">
                                <div className="col-md-7">
                                  <div className="blog-content-left">
                                    <p>{<Skeleton count={3} />}</p>
                                    <div className="btn-outer text-right">
                                      {<Skeleton width={200} count={2} />}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <Skeleton height={200} width={300} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-7">
                                  <div className="blog-content-left">
                                    {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                                    <p>{<Skeleton count={3} />}</p>
                                    <div className="btn-outer text-right">
                                      {<Skeleton width={200} count={2} />}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <Skeleton height={200} width={300} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-7">
                                  <div className="blog-content-left">
                                    {/* <h3>{<Skeleton width={200} count={2} /> }</h3> */}

                                    <p>{<Skeleton count={3} />}</p>
                                    <div className="btn-outer text-right">
                                      {<Skeleton width={200} count={2} />}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <Skeleton height={200} width={300} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {latestPosts.length > 0 ? (
                        // Render <BlogInfo> if posts are found
                        <BlogInfo
                          postData={latestPosts}
                          isTitle={true}
                          isButton={true}
                          isVideo={false}
                        />
                      ) : (
                        // Display "Post not found" if posts array is empty
                        <div className="blog-info">
                          <div className="blog-info-list">
                            <div className="blog-info-item">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="blog-content-left">
                                    <h3>Post not found</h3>
                                    <p>
                                      Sorry, the requested post could not be
                                      found. Please try again or explore other
                                      posts.
                                    </p>
                                    {/* You can customize the message as needed */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className={`blog-info bg-dark`}>
            <div className="container">
              <div className="grid grid-blog-info">
                <div className="grid-item">
                  <h2>{<Skeleton width={200} count={2} />}</h2>
                </div>
                <div className="grid-item grid-blog-border">
                  <div className="blog-info-list">
                    <div className="blog-info-item">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            <p>{<Skeleton width={400} count={3} />}</p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            <p>{<Skeleton width={400} count={3} />}</p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-content-left">
                            <p>{<Skeleton width={400} count={3} />}</p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <Skeleton height={200} width={300} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`blog-info bg-dark`}>
            <div className="container">
              <div className="grid grid-blog-info">
                <div className="grid-item">
                  <div className="grid-blog-info-block">
                    <h2>Video Content</h2>
                  </div>
                </div>
                <BlogInfo
                  postData={videos}
                  isTitle={false}
                  isButton={false}
                  isVideo={true}
                  isScrollable={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="blog-case">
        <CaseStudy title="More Case Studies" />
      </div>

      <Footer />
    </>
  )
}

export default BlogsPage
