import React, { useRef, useState, useEffect } from 'react'

import { Link, routes, navigate, useLocation, back } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import { useScrollDirection } from 'src/lib/customHooks'
import { useAuthentication } from 'src/services/auth'

import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

import SocialShare from 'src/components/SocialShare/SocialShare'

import { BeatLoader } from 'react-spinners'

const JobPostDetailPage = () => {
  const { id } = useParams()
  const { authenticate, getJobById } = useAuthentication()
  const jobRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const [job, setJob] = useState(null) // State to store the post data
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()

  // A relative path is sufficient for tests and avoids using `import.meta`,
  // which isn't supported in Jest's CommonJS environment.
  const imageUrl = '/images/logo.svg'

  const { direction, isScrolling, scrollY } = useScrollDirection()

  // console.log(window.location)
  useEffect(() => {
    // Define an asynchronous function to fetch post data
    const fetchJobData = async () => {
      try {
        // Set loading to true when starting to fetch
        setLoading(true)
        await authenticate()
        // Fetch the post data
        const jobData = await getJobById(id)

        // Set the post data and loading to false
        setJob(jobData)
        // console.log('datsssss', job)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching post data:', error)
        setLoading(false)
      }
    }

    // Call the asynchronous function
    fetchJobData()
  }, [id])

  // const handleScroll = () => {
  //   const jobElement = jobRef.current
  //   if (jobElement) {
  //     const rect = jobElement.getBoundingClientRect()
  //     console.log(rect.top >= 0, rect.top)
  //     setIsSticky(!(rect.top >= 0))
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const handleApplyClick = () => {
    // Assuming the URL is stored in `job.pageUrl`
    navigate(routes.jobApply({ pageUrl: pathname }))
  }

  return (
    <>
      <MetaTags title="JobPostDetail" description="JobPostDetail page" />

      <div className="job-post-details">
        <div className="container">
          <div className="row">
            {job ? (
              <>
                <div
                  className={`col-md-4 css-sticky ${
                    direction === 'up' && scrollY > 104 ? 'up' : ''
                  }`}
                  ref={jobRef}
                >
                  <div className="job-search-item job-search-item--details">
                    <h3>{job.title}</h3>
                    <p className="job-search-text mb-0">
                      {job.custom_fields.company_name}
                    </p>
                    <p className="job-search-sm mb-0">
                      {job.custom_fields.city}, {job.custom_fields.country}
                    </p>

                    <Link
                      to={routes.jobApply({ pageUrl: pathname })}
                      className="btn btn--primary m-t-10"
                    >
                      Apply Now
                    </Link>
                    <div className="share-job">
                      <p>Share this job</p>

                      <SocialShare
                        link={window.location.href}
                        title={job.title}
                        description={job.custom_fields.company_name}
                        image={`https://upsela.beetechsolution.com/images/logo.svg`}
                      />
                      {/*
                      <div className="social-media">
                        <Link to="">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link to="">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link to="">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link to="">
                          <i class="fa-regular fa-envelope"></i>
                        </Link>
                      </div> */}
                    </div>
                  </div>

                  {job.related_jobs.length > 0 && (
                    <div className="similar-jobs m-t-60">
                      <div className="similar-jobs-title">Similar Jobs</div>
                      <div className="links">
                        {job.related_jobs.map((relatedJob) => (
                          <Link
                            key={relatedJob.id}
                            to={`/job-detail/${relatedJob.id}`}
                          >
                            {relatedJob.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="container back-button">
                    <button
                      className="button-back"
                      type="button"
                      onClick={back}
                    >
                      <img src="/images/arrow-right-1.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="company-job-info">
                    <div className="company-job-d">
                      <h3 className="c-title">Job Details</h3>
                      <div className="company-job-grid">
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-company.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Company</h3>
                            <div className="company-job-badge">
                              {job.custom_fields.company_name}
                            </div>
                          </div>
                        </div>
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-map-pin.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Location</h3>
                            <div className="company-job-badge">
                              {job.custom_fields.city},{' '}
                              {job.custom_fields.country}
                            </div>
                          </div>
                        </div>
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-clock.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Job posted</h3>
                            <div className="company-job-badge">
                              {job.posted_date}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="company-job-grid">
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-dollar.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Salary</h3>
                            <div className="company-job-badge">
                              From ${job.custom_fields.yearly_salary} a year
                            </div>
                          </div>
                        </div>
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-role.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Role Type</h3>
                            <div className="company-job-badge">
                              {job.custom_fields.job_type}
                            </div>
                          </div>
                        </div>
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-briefcase.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Job Type</h3>
                            <div className="company-job-badge">
                              {job.custom_fields.role_type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="job-description">
                      <div dangerouslySetInnerHTML={{ __html: job.content }} />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`col-md-4 ${isSticky ? 'sticky' : ''}`}
                  ref={jobRef}
                >
                  <div className="job-search-item job-search-item--details">
                    <h3>
                      {loading ? <Skeleton width={200} /> : jobData.title}
                    </h3>
                    <p className="job-search-text mb-0">
                      {loading ? (
                        <Skeleton width={150} />
                      ) : (
                        jobData.company_name
                      )}
                    </p>
                    <p className="job-search-sm mb-0">
                      {loading ? <Skeleton width={100} /> : jobData.location}
                    </p>

                    <a
                      href={loading ? '' : jobData.applyLink}
                      className="btn btn--primary m-t-10"
                    >
                      Apply Now
                    </a>
                    <div className="share-job">
                      <p>Share this job</p>
                      <div className="social-media">
                        <Link to="">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link to="">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link to="">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link to="">
                          <i className="fa-regular fa-envelope"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="similar-jobs m-t-60">
                    <div className="similar-jobs-title">
                      {loading ? <Skeleton width={150} /> : 'Similar Jobs'}
                    </div>
                    <div className="links">
                      {loading ? (
                        <>
                          <Skeleton width={150} />
                          <Skeleton width={150} />
                        </>
                      ) : (
                        <>
                          <Link to="/computer-engineer">Computer Engineer</Link>
                          <Link to="/project-manager">Project Manager</Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="company-job-info">
                    <div className="company-job-d">
                      <h3 className="c-title">
                        {loading ? <Skeleton width={200} /> : 'Job Details'}
                      </h3>
                      <div className="company-job-grid">
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-company.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Company</h3>
                            <div className="company-job-badge">
                              {loading ? (
                                <Skeleton width={150} />
                              ) : (
                                job.custom_fields.company_name
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-map-pin.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Location</h3>
                            <div className="company-job-badge">
                              {loading ? (
                                <Skeleton width={150} />
                              ) : (
                                `${job.custom_fields.city}, ${job.custom_fields.country}`
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="company-job-item">
                          <div className="dollar-sign">
                            <img src="/images/icon-clock.svg" alt="" />
                          </div>
                          <div className="company-job-body">
                            <h3 className="mb-0 ">Job posted</h3>
                            <div className="company-job-badge">
                              {loading ? (
                                <Skeleton width={150} />
                              ) : (
                                job.posted_date
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="company-job-grid">
                        {/* ... similar structure for Salary, Role Type, Job Type */}
                      </div>
                    </div>

                    <div className="job-description">
                      {loading ? (
                        <Skeleton count={5} height={20} />
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{ __html: job.content }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobPostDetailPage
