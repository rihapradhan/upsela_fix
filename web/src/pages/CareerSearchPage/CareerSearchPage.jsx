import { useState, useEffect, useRef } from 'react'

import _debounce from 'lodash/debounce'

import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import JobSearchItem from 'src/components/JobSearchItem/JobSearchItem'
import 'react-loading-skeleton/dist/skeleton.css'
import JobSearchItemWithSkeleton from 'src/components/JobSearchItemWithSkeleton/JobSearchItemWithSkeleton'

import Select from 'react-select'

import { Link, routes } from '@redwoodjs/router'

const API_BASE_URL = process.env.WP_BASE_URL

const CareerSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(undefined)
  const [maxNumPages, setMaxNumPages] = useState(1)
  const [disablePageButton, setDisablePageButton] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [dynamicDropdownOptions, setDynamicDropdownOptions] = useState({})
  const [firstApiCall, setFirstApiCall] = useState(false)
  const initialRender = useRef(true)
  const dropdownOrder = ['date_posted', 'job_type', 'pay', 'city']
  const dropdownLabels = {
    date_posted: 'Date Posted',
    job_type: 'Job Type',
    pay: 'Pay',
    city: 'City',
  }

  // Maintain state for selected values
  const [selectedValues, setSelectedValues] = useState({})

  const handleSearch = async (e, page, selectedValues) => {
    e.preventDefault()
    setLoading(true)

    const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/jobs`

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search_query: searchQuery,
          location_query: locationQuery,
          posts_per_page: 4,
          paged: page,
          ...transformSelectedValues(selectedValues),
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setDynamicDropdownOptions(data.menus)
        setJobs(data.jobs)
        setMaxNumPages(data.max_num_pages)

        if (!firstApiCall) {
          setFirstApiCall(true)
        }
      } else {
        // Handle error
      }
    } finally {
      setLoading(false)
    }
  }

  // Handle clearing the selected value for a specific key
  const handleClearValue = async (key) => {
    // Create a copy of selectedValues
    const updatedSelectedValues = { ...selectedValues }

    // Remove the specific key from the copy
    delete updatedSelectedValues[key]

    // Update state with the modified object
    setSelectedValues(updatedSelectedValues)

    // Use the updatedSelectedValues for the debounced API call
    await debouncedHandleSearch(
      { preventDefault: () => {} },
      currentPage,
      updatedSelectedValues
    )
  }

  // Handle resetting all selected values
  const handleResetValues = async () => {
    setSelectedValues({})
    await debouncedHandleSearch({ preventDefault: () => {} }, currentPage)
  }

  // Extract label without the count
  const getLabelWithoutCount = (label) => {
    return label.replace(/\(\d+\)/, '').trim()
  }

  const handleDropdownSelect = async (key, selectedOption) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [key]: selectedOption,
    }))

    // Use the updated state in the debounced API call
    await debouncedHandleSearch({ preventDefault: () => {} }, currentPage)
  }

  // Debounce the handleSearch function
  const debouncedHandleSearch = _debounce(handleSearch, 500) // Adjust the delay (in milliseconds) as needed

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }
    // Check if searchQuery or locationQuery have changed
    if (searchQuery !== '' || locationQuery !== '') {
      // Use the updated state in an effect
      const fetchData = async () => {
        // Use the debounced function for API call
        await debouncedHandleSearch(
          { preventDefault: () => {} },
          currentPage,
          selectedValues
        )
      }

      fetchData()
    } else {
      // Check if there are any selected values
      const hasSelectedValues = Object.keys(selectedValues).some(
        (key) => selectedValues[key] !== null
      )

      // If there are selected values, trigger the effect
      if (hasSelectedValues) {
        // Use the updated state in an effect
        const fetchData = async () => {
          // Use the debounced function for API call
          await debouncedHandleSearch(
            { preventDefault: () => {} },
            currentPage,
            selectedValues
          )
        }

        fetchData()
      } else {
        setSelectedValues({})
        const fetchData = async () => {
          // Use the debounced function for API call
          await debouncedHandleSearch(
            { preventDefault: () => {} },
            currentPage,
            selectedValues
          )
        }

        fetchData()
      }
    }
  }, [searchQuery, locationQuery, JSON.stringify(selectedValues), currentPage])

  const transformSelectedValues = (selectedValues) => {
    const transformedValues = { ...selectedValues }

    // Loop through each key in selectedValues
    Object.keys(transformedValues).forEach((key) => {
      // Check if the value is an object and has label and value properties
      if (
        typeof transformedValues[key] === 'object' &&
        'label' in transformedValues[key]
      ) {
        // Remove "$" from the label and extract the count
        const [, value] =
          transformedValues[key].label.match(/\$?([^()]+)/) || []
        transformedValues[key] = value.trim() // Use the processed value
      }
    })

    return transformedValues
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    setLoading(true)

    // Use the debounced function for API call
    debouncedHandleSearch({ preventDefault: () => {} }, newPage).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <MetaTags title="CareerSearch" description="CareerSearch page" />

      <div className="job-search">
        <form
          onSubmit={(e) => handleSearch(e, undefined)}
          className="job-search-form"
        >
          <div className="job-inner">
            <div className="group-input">
              <img src="/images/search.svg" alt="" />
              <input
                type="text"
                placeholder="Job titles, keywords or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="group-input">
              <img src="/images/map-pin.svg" alt="" />
              <input
                type="text"
                placeholder="Location"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>
          </div>
          <div>
            <input type="submit" value="Search" className="btn btn--primary" />
          </div>
        </form>
        {firstApiCall && (
          <div className="btns-outer">
            <div className="btns">
              {/* Render dynamic dropdowns based on the specified order and labels */}
              {dropdownOrder.map((key) => (
                <div
                  key={key}
                  className="yosegi-FilterPill-dropdownListItem"
                  tabIndex="-1"
                  role="menuitem"
                >
                  {!selectedValues[key] &&
                    dynamicDropdownOptions[key] && ( // Add this check
                      <Select
                        id={`filter-${key}`}
                        className="yosegi-FilterPill-pill"
                        aria-label={`${dropdownLabels[key]} filter`}
                        options={Object.entries(
                          dynamicDropdownOptions[key]
                        ).map(([label, value]) => ({
                          label: `${label} (${value})`,
                          value,
                        }))}
                        placeholder={`Select ${dropdownLabels[key]}`}
                        value={selectedValues[key] || null}
                        onChange={(selectedOption) =>
                          handleDropdownSelect(key, selectedOption)
                        }
                        isClearable
                      />
                    )}
                  {selectedValues[key] && (
                    <div className="clear-btn">
                      <button
                        className="clear-button"
                        onClick={() => handleClearValue(key)}
                        aria-label={`Clear ${dropdownLabels[key]} filter`}
                      >
                        {getLabelWithoutCount(selectedValues[key].label)}{' '}
                        <span>&#x2715;</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {loading ? (
          // Display skeleton loading for each item
          <div className="container p-b-80">
            <div className="job-search-items">
              {Array.from({ length: 5 }, (_, index) => (
                <JobSearchItemWithSkeleton
                  key={index}
                  loading={loading}
                  data={{}}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="job-search-items">
                {jobs.length === 0 && firstApiCall ? (
                  <p className="m-b-80">No jobs found.</p>
                ) : (
                  jobs.map((job, index) => (
                    <JobSearchItem key={index} jobSearchItem={job} />
                  ))
                )}
              </div>
            </div>
          </>
        )}
        <div className="container ">
          {maxNumPages > 1 && (
            <div className="pagination pagination--custom pagination-career">
              {currentPage > 1 && (
                <button onClick={() => handlePageChange(currentPage - 1)}>
                  Previous
                </button>
              )}
              {Array.from({ length: maxNumPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => {
                    handlePageChange(index + 1)
                    setDisablePageButton(index + 1)
                  }}
                  className={currentPage === index + 1 ? 'active' : ''}
                  disabled={
                    (disablePageButton === undefined && index === 0) ||
                    disablePageButton === index + 1
                  }
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < maxNumPages && (
                <button onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </button>
              )}
            </div>
          )}
        </div>
        {!loading && jobs.length === 0 && !firstApiCall && (
          <div className="job-search-footer m-t-80">
            <Link to={routes.employers()}>
              <div className="job-footer-inner">
                <i className="fa-solid fa-briefcase"></i>
                <span className="talent-text">Employers: Hire a talent </span>
                <span className="next-hire"> your next hire is here</span>
              </div>
            </Link>
          </div>
        )}
      </div>

      {jobs.length <= 0 && (
        <div className="container-full">
          <img src="/images/career-banner.jpg" alt="Career Banner" />
        </div>
      )}
      <Footer />
    </>
  )
}

export default CareerSearchPage
