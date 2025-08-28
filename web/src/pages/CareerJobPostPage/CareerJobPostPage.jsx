import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import JobSearchItem from 'src/components/JobSearchItem/JobSearchItem'

const CareerJobPostPage = () => {
  const jobSearchItem = [
    {
      title: 'Software Development',
      jobSearchText: 'Rays IT Technologies',
      jobSearchSm: 'Dallas, Texas, United States',
      jobBadge: [
        { badge: '$10000/mth' },
        { badge: 'Full Time' },
        { badge: 'Remote' },
      ],
    },
    {
      title: 'Software Development',
      jobSearchText: 'Rays IT Technologies',
      jobSearchSm: 'Dallas, Texas, United States',
      jobBadge: [
        { badge: '$10000/mth' },
        { badge: 'Full Time' },
        { badge: 'Remote' },
      ],
    },
    {
      title: 'Software Development',
      jobSearchText: 'Rays IT Technologies',
      jobSearchSm: 'Dallas, Texas, United States',
      jobBadge: [
        { badge: '$10000/mth' },
        { badge: 'Full Time' },
        { badge: 'Remote' },
      ],
    },
    {
      title: 'Software Development',
      jobSearchText: 'Rays IT Technologies',
      jobSearchSm: 'Dallas, Texas, United States',
      jobBadge: [
        { badge: '$10000/mth' },
        { badge: 'Full Time' },
        { badge: 'Remote' },
      ],
    },
    {
      title: 'Software Development',
      jobSearchText: 'Rays IT Technologies',
      jobSearchSm: 'Dallas, Texas, United States',
      jobBadge: [
        { badge: '$10000/mth' },
        { badge: 'Full Time' },
        { badge: 'Remote' },
      ],
    },
    {
      title: 'Software Development',
      jobSearchText: 'Rays IT Technologies',
      jobSearchSm: 'Dallas, Texas, United States',
      jobBadge: [
        { badge: '$10000/mth' },
        { badge: 'Full Time' },
        { badge: 'Remote' },
      ],
    },
  ]

  return (
    <>
      <MetaTags title="CareerJobPost" description="CareerJobPost page" />
      <Header />
      {/* <div className="job-search">
        <form action="" className="job-search-form">
          <div className="job-inner">
            <div className="group-input">
              <img src="/images/search.svg" alt="" />
              <input
                type="text"
                placeholder="Job titles, keywords or company"
              />
            </div>
            <div className="group-input">
              <img src="/images/map-pin.svg" alt="" />
              <input
                type="text"
                placeholder="Job titles, keywords or company"
              />
            </div>
          </div>
          <div>
            <input type="submit" value="Search" className="btn btn--primary" />
          </div>
        </form>
      </div>
      <div className="btns-outer">
        <div className="btns p-b-20">
          <button>
            Date Posted <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button>
            Remote <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button>
            Pay <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button>
            Job Type <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button>
            Location <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button>
            Company <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div className="container p-b-80">
        <div className="job-search-items">
          {jobSearchItem.map((item, index) => {
            return <JobSearchItem key={index} jobSearchItem={item} />
          })}
        </div>
      </div>

      <Footer /> */}
    </>
  )
}

export default CareerJobPostPage
