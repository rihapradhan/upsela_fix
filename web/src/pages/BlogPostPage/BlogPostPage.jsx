import React, { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'
import { BeatLoader } from 'react-spinners'

import { Link, routes, useLocation } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogInfo from 'src/components/BlogInfo/BlogInfo'
import BlogSlider from 'src/components/BlogSlider/BlogSlider'
import CaseTop from 'src/components/CaseTop/CaseTop'
import Footer from 'src/components/Footer/Footer'
import VerticalTab from 'src/components/VerticalTab/VerticalTab'
import { useAuthentication } from 'src/services/auth'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'
import 'react-loading-skeleton/dist/skeleton.css'

import SocialShare from 'src/components/SocialShare/SocialShare'

const BlogPostPage = () => {
  const { id } = useParams()
  const { authenticate, getPostById, getPostsByPage } = useAuthentication()
  const { sharedData, setSharedData } = useSharedData()
  const storedData = JSON.parse(localStorage.getItem('sharedData'))
  const [posts, setPosts] = useState([])
  const { jsonData } = useSharedData()
  const [post, setPost] = useState(null) // State to store the post data
  const [loading, setLoading] = useState(true)
  const blogData = jsonData.blogData
  const cased = jsonData.cased
  const currentUrl = window.location.href
  useEffect(() => {
    // Define an asynchronous function to fetch post data
    const fetchPostData = async () => {
      try {
        // Set loading to true when starting to fetch
        setLoading(true)
        await authenticate()
        // Fetch the post data
        const postData = await getPostById(id)

        // Set the post data and loading to false
        setPost(postData)

        const { posts: firstPagePosts, totalPages: total } =
          await getPostsByPage(1)
        setPosts(firstPagePosts)
        setTotalPages(total)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching post data:', error)
        setLoading(false)
      }
    }

    // Call the asynchronous function
    fetchPostData()
  }, [id])

  return (
    <>
      <MetaTags title={post?.title?.rendered} description="BlogPost page" />
      <div className="blog-post-page">
        <div className="case-top-wrap">
          <div className="container back-button">
            <Link to={`/blog`}>
              <img src="/images/arrow-right-1.svg" alt="" />
            </Link>
          </div>
          {post ? (
            <div className="case-top">
              <div className="container">
                <div className="row ">
                  <div className="col-md-6 d-flex case-title">
                    <p className="case-top-sub">
                      {post.categoryNames.map((categoryName, index) => (
                        <li key={index}>{categoryName}</li>
                      ))}
                    </p>
                    <h2 className="case-top-title">{post.title.rendered}</h2>
                    <div className="case-top-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2716_30574)">
                          <path
                            d="M9.50065 17.4166C13.8729 17.4166 17.4173 13.8722 17.4173 9.49992C17.4173 5.12766 13.8729 1.58325 9.50065 1.58325C5.1284 1.58325 1.58398 5.12766 1.58398 9.49992C1.58398 13.8722 5.1284 17.4166 9.50065 17.4166Z"
                            stroke="#131623"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.5 4.75V9.5L12.6667 11.0833"
                            stroke="#131623"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2716_30574">
                            <rect width="19" height="19" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {post.date &&
                        new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    {post._embedded && post._embedded['wp:featuredmedia'] ? (
                      <img
                        className="border-radius-30"
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt="Featured"
                      />
                    ) : (
                      <img
                        src="/images/slider1.jpg"
                        alt="Default"
                        className="border-radius-30"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="case-top">
              <div className="container">
                <div className="row ">
                  <div className="col-md-6 d-flex case-title">
                    <ul>
                      {[1].map((_, index) => (
                        <Skeleton key={index} width={200} height={20} />
                      ))}
                    </ul>
                    <Skeleton width={630} height={83} />
                    <Skeleton width={300} height={40} />
                  </div>
                  <div className="col-md-6">
                    <Skeleton width={630} height={420} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="wrap-bg p-t-60">
          <div className="blog-content">
            <div className="container">
              {/* Display the fetched post data or Loading... */}
              {post ? (
                <>
                  {/* <h3>{post.title.rendered}</h3> */}
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />

                  {/* Display category names or Loading... */}
                  {loading ? (
                    <p>Loading categories...</p>
                  ) : (
                    post.categoryNames && (
                      <div className="blog-tags">
                        <strong>Tags:</strong>
                        <ul>
                          {post.categoryNames.map((categoryName, index) => (
                            <li key={index}>{categoryName}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </>
              ) : (
                <div className="container">
                  <div>
                    <h2 className="wp-block-heading">
                      <Skeleton width={300} height={20} />
                    </h2>

                    <blockquote className="wp-block-quote">
                      <p>
                        <Skeleton count={3} />
                      </p>
                    </blockquote>

                    <h3 className="wp-block-heading">
                      <Skeleton width={200} height={20} />
                    </h3>

                    <blockquote className="wp-block-quote">
                      <p>
                        <Skeleton count={1} />
                      </p>
                    </blockquote>

                    <h1 className="wp-block-heading">
                      <Skeleton width={400} height={20} />
                    </h1>

                    <figure className="wp-block-image aligncenter">
                      <Skeleton width={1200} height={1000} />
                    </figure>

                    <h6 className="wp-block-heading">
                      <Skeleton width={300} height={20} />
                    </h6>

                    <ol>
                      <li>
                        <Skeleton width={200} height={20} />
                      </li>
                      <li>
                        <Skeleton width={300} height={20} />
                      </li>
                      <li>
                        <Skeleton width={200} height={20} />
                      </li>
                    </ol>

                    <h2 className="wp-block-heading">
                      <Skeleton width={300} height={20} />
                    </h2>

                    <p>
                      <Skeleton count={10} />
                    </p>

                    <h1 className="wp-block-heading">
                      <Skeleton width={400} height={20} />
                    </h1>

                    <hr className="wp-block-separator has-alpha-channel-opacity" />

                    <h1 className="wp-block-heading">
                      <Skeleton width={500} height={20} />
                    </h1>

                    <hr className="wp-block-separator has-alpha-channel-opacity" />
                  </div>
                  <div>
                    <strong>Tags:</strong>
                    <ul>
                      <li>
                        <Skeleton width={100} height={20} />
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="container back-button">
              <Link to={`/blog`}>
                <img src="/images/arrow-right-1.svg" alt="" />
              </Link>
              {post ? (
                <SocialShare
                  title={post.title.rendered}
                  link={currentUrl}
                  description={post.excerpt.rendered}
                  image={
                    post._embedded && post._embedded['wp:featuredmedia'] ? (
                      <img
                        className="border-radius-30"
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt="Featured"
                      />
                    ) : (
                      <img
                        src="/images/slider1.jpg"
                        alt="Default"
                        className="border-radius-30"
                      />
                    )
                  }
                />
              ) : (
                <Skeleton height={200} width={600} />
              )}
            </div>
          </div>
        </div>
        <BlogSlider />

        <div className="blog-info-outer ">
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
            <div className={`blog-info null`}>
              <div className="container">
                <div className="grid grid-blog-info">
                  <div className="grid-item">
                    <div className="grid-blog-info-block">
                      <h2>Latest Insights</h2>
                    </div>
                  </div>
                  <div className="grid-blog-info-block">
                    <BlogInfo
                      postData={posts}
                      isTitle={true}
                      bgColor={null}
                      isButton={true}
                      parentTitle="Latest Insights"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPostPage
