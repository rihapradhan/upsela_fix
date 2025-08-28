import { useState, useRef } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'
import { BeatLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'

import { Link, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'

import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import Header from 'src/components/Header/Header'
import { useAuthentication } from 'src/services/auth'

const API_BASE_URL = process.env.WP_BASE_URL

const JobApplyPage = () => {
  const baseUrl = window.location.origin
  const { pageUrl } = useParams()
  const { authenticate } = useAuthentication()
  const [loading, setLoading] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState(null)
  const recaptchaRef = useRef()
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    tel: '',
    location: '',
    zipCode: '',
    file: null,
    joburl: `${baseUrl}${pageUrl}`,
  })

  const resetForm = () => {
    setFormData({
      fname: '',
      lname: '',
      email: '',
      tel: '',
      location: '',
      zipCode: '',
      file: null,
      joburl: `${baseUrl}${pageUrl}`,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] })
  }

  const handleRecaptchaChange = (value) => {
    // Handle the reCAPTCHA response
    setRecaptchaValue(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate the form fields before submitting (add your validation logic)

    try {
      setLoading(true)
      // Authenticate and get the JWT token
      const { token } = await authenticate()
      // Create a FormData object to handle file uploads

      const formDataWithFile = new FormData()

      // Append other form data fields
      Object.keys(formData).forEach((key) => {
        if (key !== 'file') {
          formDataWithFile.append(key, formData[key])
        }
      })

      // Append the file data separately
      formDataWithFile.append('file', formData.file)

      // Make the request to the WordPress REST API endpoint using Axios
      const response = await axios.post(
        `${API_BASE_URL}/wp-json/wp/v2/send-job-application/`,
        formDataWithFile,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      // Handle success if the request is successful
      toast.success(
        'Thank you! Your job application has been submitted successfully.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: true,
        }
      )

      // Reset the form after a successful submission
      resetForm()
      // You can perform additional actions with the response if needed
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
      toast.error(
        "Oops! Something went wrong and we couldn't submit your job application. Please try again later.",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: true, // Adjust the duration as needed
        }
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <MetaTags title="JobApply" description="JobApply page" />
      <Header />
      <div className="contact-form apply-form">
        <h2 className="apply-form-title">Submit your Application</h2>
        <div className="container">
          <form onSubmit={handleSubmit} className="col-md-8 col-lg-6 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="tel"
                  className="form-control"
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor=""> Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Location"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor=""> Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Zip Code"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="custom-file">
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    className="custom-file-input"
                  />
                  <label className="custom-file-label" htmlFor="fileInput">
                    <span>
                      {formData.file ? formData.file.name : ' Upload  Resume'}
                    </span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="arrow-right">
                        <g id="Group 998">
                          <path
                            id="Vector"
                            d="M7.69727 17.3032L17.5968 7.40373"
                            stroke="#804BF2"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                          <path
                            id="Vector_2"
                            d="M8.4043 6.69678H18.3038V16.5963"
                            stroke="#804BF2"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdQdl8pAAAAAIMgIuPKYRWLH3ncjqTpepcmfgKX"
              size="invisible"
              onChange={(value) => handleRecaptchaChange(value)}
            />
            <div className="btn-submit-outer">
              <button
                type="submit"
                className={`btn btn-contact btn--primary d-block ${
                  loading ? 'loading' : ''
                }`}
              >
                {loading ? (
                  <>
                    Sending <BeatLoader color="#ffff" loading={true} size={8} />
                  </>
                ) : (
                  'Submit your Application'
                )}
              </button>

              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobApplyPage
