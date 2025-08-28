import React, { useState, useRef } from 'react'

import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import { BeatLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'

import { useAuthentication } from 'src/services/auth'
import 'react-toastify/dist/ReactToastify.css'

const API_BASE_URL = process.env.WP_BASE_URL

const ContactForm = () => {
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
    company: '',
    jobTitle: '',
    about: '',
    department: '',
    help: '',
    file: null,
  })

  const resetForm = () => {
    setFormData({
      // Set the form data to its initial state
      fname: '',
      lname: '',
      email: '',
      tel: '',
      location: '',
      zipCode: '',
      company: '',
      jobTitle: '',
      about: '',
      department: '',
      help: '',
      file: null,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRecaptcha = async () => {
    // Trigger the reCAPTCHA challenge
    recaptchaRef.current.execute()
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] })
  }

  const handleRecaptchaChange = (value) => {
    // Handle the reCAPTCHA response
    recaptchaRef.current.execute()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validate the reCAPTCHA value
    if (!recaptchaValue) {
      // Display an error message or take appropriate action
      console.error('reCAPTCHA validation failed')
      return
    }
    try {
      setLoading(true)

      // Authenticate and get the JWT token
      const { token } = await authenticate()

      const apiUrl = `${API_BASE_URL}/wp-json/wp/v2/send-email/`

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
      const response = await axios.post(apiUrl, formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })

      // Handle success if the request is successful

      toast.success('Thank you! Your message has been sent successfully.', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: true,
      })
      // Reset the reCAPTCHA value
      setRecaptchaValue(null)
      // Reset the form after a successful submission
      resetForm()
      // You can perform additional actions with the response if needed
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
      toast.error(
        "Oops! Something went wrong and we couldn't send your message. Please try again later.",
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
    <div className="contact-form">
      <div className="container">
        <form onSubmit={handleSubmit} className="col-md-8 col-lg-6 mx-auto">
          {/* Your other form fields */}

          <div className="row">
            <div className="col-md-6">
              <label htmlFor="fname">First Name</label>
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
              <label htmlFor="lname">Last Name</label>
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
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="tel">Phone Number</label>
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
              <label htmlFor="location"> Location</label>
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
              <label htmlFor="zipCode"> Zip Code</label>
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
            <div className="col-md-6">
              <label htmlFor="company"> Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                className="form-control"
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="jobTitle"> Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                className="form-control"
                onChange={handleChange}
                placeholder="Job Title"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <label htmlFor="about"> Tell about yourself</label>

              <div className="custom-select">
                <select
                  name="about"
                  value={formData.about}
                  className="form-control"
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    I am
                  </option>
                  <option value="an employer">an employer</option>
                  <option value="job seeker">job seeker</option>
                  <option value="looking for IT services">looking for IT services</option>
                </select>
              </div>
            </div>
          </div>

          {formData.about === 'an employer' && (
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="department">
                  Please select the department you’re hiring for
                </label>
                <div className="custom-select">
                  <select
                    name="department"
                    value={formData.department}
                    className="form-control"
                    onChange={handleChange}
                    required
                  >
                    <option value="" selected disabled>
                      Please select
                    </option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-md-12">
              <label htmlFor="help">What can we help you with?</label>
              <div className="custom-select">
                <select
                  name="help"
                  value={formData.help}
                  className="form-control"
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Please select
                  </option>
                  <option value="looking to fill open position(s)">looking to fill open position(s)</option>
                  <option value="workforce solutions">workforce solutions</option>
                  <option value="IT/Engineering solutions">IT/Engineering solutions</option>
                </select>
              </div>
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
                    {formData.file ? formData.file.name : ' Upload Document'}
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
              {/* <button type="button" onClick={handleUpload}>
                Upload Document
              </button> */}
            </div>
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdQdl8pAAAAAIMgIuPKYRWLH3ncjqTpepcmfgKX"
            size="invisible"
            onChange={(value) => setRecaptchaValue(value)}
          />
          <div className="btn-submit-outer">
            <button
              onClick={handleRecaptchaChange}
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
                'Get Started with Upsela'
              )}
            </button>

            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
