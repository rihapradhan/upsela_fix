import { Link } from '@redwoodjs/router'

const JobSearchItem = (props) => {
  const data = props.jobSearchItem
  const id = props.jobSearchItem.id

  return (
    <>
      <Link to={`/job-detail/${id}`}>
        <div className="job-search-item">
          <h3>{data.title}</h3>
          <p className="job-search-text mb-0">{data.company_name}</p>
          <p className="job-search-sm mb-0">{data.city}, United States</p>

          <div className="job-search-meta">
            <div className="job-search-badge">
              <img src="/images/dollar-sign.svg" alt="" />
              <span> ${data.monthly_salary}/mth</span>
            </div>
            <div className="job-search-badge">
              <img src="/images/clock.svg" alt="" />
              <span> {data.role_type}</span>
            </div>
            <div className="job-search-badge">
              <img src="/images/briefcase.svg" alt="" />
              <span> {data.job_type}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default JobSearchItem
