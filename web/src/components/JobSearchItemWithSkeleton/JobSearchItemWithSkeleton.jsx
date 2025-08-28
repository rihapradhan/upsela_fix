import React from 'react'

import Skeleton from 'react-loading-skeleton'

const JobSearchItemWithSkeleton = ({ loading, data }) => {
  return (
    <div className="job-search-item">
      <h3>{loading ? <Skeleton width={200} /> : data.title}</h3>
      <p className="job-search-text mb-0">
        {loading ? <Skeleton width={150} /> : data.company_name}
      </p>
      <p className="job-search-sm mb-0">
        {loading ? <Skeleton width={100} /> : `${data.city}, United States`}
      </p>

      <div className="job-search-meta">
        <div className="job-search-badge">
          <img src="/images/dollar-sign.svg" alt="" />
          <span>
            {loading ? <Skeleton width={80} /> : `$${data.monthly_salary}/mth`}
          </span>
        </div>
        <div className="job-search-badge">
          <img src="/images/clock.svg" alt="" />
          <span>{loading ? <Skeleton width={100} /> : data.role_type}</span>
        </div>
        <div className="job-search-badge">
          <img src="/images/briefcase.svg" alt="" />
          <span>{loading ? <Skeleton width={100} /> : data.job_type}</span>
        </div>
      </div>
    </div>
  )
}

export default JobSearchItemWithSkeleton
