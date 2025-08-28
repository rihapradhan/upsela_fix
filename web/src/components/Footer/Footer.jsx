import { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'

import { Link, routes } from '@redwoodjs/router'

import { useAuthentication } from 'src/services/auth'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import Button from '../Button/Button'
import HomeModal from '../HomeModal/HomeModal'
import { sectorItems } from '../Sector/Sector'
import 'react-loading-skeleton/dist/skeleton.css'

const Footer = () => {
  const { jsonData } = useSharedData()
  const servicesMenu = jsonData.servicesMenu

  const { authenticate, getPostsByPage } = useAuthentication()

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        await authenticate()
        // Fetch the first page of posts (8 posts)
        const { posts: firstPagePosts } = await getPostsByPage(1)
        setPosts(firstPagePosts)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      <HomeModal open={openModal} setOpen={setOpenModal} />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="footer-contact">
                <h3>Contact us</h3>
                <p> contact@upsela.io</p>
                <p>2727 LBJ Freeway, Farmers Branch, Suite 425 TX 75234</p>
                <p>865 855 0210</p>
                <button
                  type="button"
                  className="btn btn--primary m-t-20"
                  onClick={() => setOpenModal(true)}
                >
                  Get Started with UpSela
                </button>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="footer-col">
                    {/* <div className="footer-col-box">
                      <h3>Our Specialities</h3>
                      <ul>
                        <li>
                          <a href="">Software Development</a>
                        </li>
                        <li>
                          <a href="">Recruiting & Staffing</a>
                        </li>
                        <li>
                          <a href="">DevOps</a>
                        </li>
                      </ul>
                    </div> */}

                    <div className="footer-col-box">
                      <h3>Our Services</h3>
                      <ul>
                        {servicesMenu.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link
                                to={`/service/${item.label}`}
                                dangerouslySetInnerHTML={{
                                  __html: item.title,
                                }}
                              ></Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6 col-lg-4">
                  <div className="footer-col">
                    <div className="footer-col-box">
                      <h3>General</h3>
                      <ul>
                        <li>
                          <Link to="/">Home </Link>
                        </li>

                        <li>
                          <Link to="/service">Services</Link>
                        </li>

                        <li>
                          <Link to="/blog">Blogs</Link>
                        </li>

                        <li>
                          <Link to="/careers">Career</Link>
                        </li>

                        <li>
                          <Link to="/case_studies">Case Studies</Link>
                        </li>

                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6 col-lg-4">
                  <div className="footer-col">
                    <div className="footer-col-box">
                      <h3>Industries we serve</h3>
                      <ul>
                        {sectorItems.map((item, index) => {
                          return <li key={index}>{item.title}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 two-col">
                  <div className="row">
                    <div className="col-md-6 col-lg-12 footer-col">
                      <h3>Careers</h3>
                      <ul>
                        <li>
                          <Link to={routes.careers()}>Careers</Link>
                        </li>
                        <li>
                          <Link to={routes.employers()}>
                            Experienced Professional
                          </Link>
                        </li>
                        <li>
                          <Link to={routes.careers()}>Job Search</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-lg-12 footer-col">
                      <div className="footer-col-news">
                        <h3>Resources</h3>
                        {/* {props.posts.map((item, index) => (
                          <div className="news-item" key={index}>
                            <a
                              href={`/blog/${
                                props.posts && props.posts.length > 0
                                  ? props.posts[0]?.id
                                  : ''
                              }`}
                            >
                              {item.title.rendered}
                            </a>
                          </div>
                        ))} */}
                        <ul className="m-b-20">
                          <li>
                            <Link to={routes.blog()}>Blog</Link>
                          </li>
                        </ul>


                        {posts && posts?.length > 0 ? posts.map((post, index) => {
                          return (
                            index < 2 && <div className="news-item">
                              <a
                                href={`/blog/${post?.id
                                  }`}
                              >
                                {loading ? (
                                  <Skeleton width={300} height={20} />
                                ) : (
                                  post.title.rendered
                                )}
                              </a>
                            </div>
                          )
                        }) : null}
                        {/* <div className="news-item">
                          <a
                            href={`/blog/${
                              posts && posts.length > 0 ? posts[0]?.id : ''
                            }`}
                          >
                            {loading || !posts || posts.length === 0 ? (
                              <Skeleton width={300} height={20} />
                            ) : (
                              posts[0].title.rendered
                            )}
                          </a>
                        </div>
                        <div className="news-item">
                          <a
                            href={`/blog/${
                              posts && posts.length > 0 ? posts[1]?.id : ''
                            }`}
                          >
                            {loading || !posts || posts.length === 0 ? (
                              <Skeleton width={300} height={20} />
                            ) : (
                              posts[1].title.rendered
                            )}
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-buttom">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="social-media-outer">
                    <span className="text-white">Follow Us</span>
                    <div className="social-media">
                      <a href="https://www.facebook.com/profile.php?id=100089103047044">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/upselatalentsolutions">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/@upselatalentsolutions">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/upsela/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="https://twitter.com/UpSelaTSolution">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="footer-buttom-right">
                    <ul>
                      <li>&copy; 2024 Upsela Talent Solutions</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
