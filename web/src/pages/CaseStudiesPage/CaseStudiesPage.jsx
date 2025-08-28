import React, { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata, MetaTags } from '@redwoodjs/web'

import CaseItem from 'src/components/CaseItem/CaseItem'
import Different from 'src/components/Different/Different'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const CaseStudiesPage = () => {
  const { jsonData } = useSharedData()
  const caseStudyPosts = jsonData.caseStudyPosts

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4 // Adjust as needed

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  // Get the cases for the current page
  const casesForPage = caseStudyPosts.slice(startIndex, endIndex)

  // Pagination handler for next page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(caseStudyPosts.length / pageSize)) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Pagination handler for previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <MetaTags title="Case Studies" description="Case Studies" />
      <div className="case-studies">
        <div className="container">
          <h2>Case Studies</h2>
          {casesForPage.map((item, index) => (
            <CaseItem key={index} data={item} />
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="container">
        <div className="pagination pagination--custom m-b-80">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6663 8H3.33301"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99967 12.6666L3.33301 7.99992L7.99967 3.33325"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Previous
          </button>
          {Array.from({
            length: Math.ceil(caseStudyPosts.length / pageSize),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={currentPage === index + 1}
              className={`${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(caseStudyPosts.length / pageSize)
            }
            className="next"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33366 8H12.667"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00033 12.6666L12.667 7.99992L8.00033 3.33325"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Different
        centered={true}
        contactMessage={'Ready to Skyrocket Your Business?'}
      />
      <Footer />
    </>
  )
}

export default CaseStudiesPage
