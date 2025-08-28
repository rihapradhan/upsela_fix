import React, { useState, useRef } from 'react'

import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import { BeatLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'

import { useOnClickOutside } from 'src/lib/customHooks'
import { useAuthentication } from 'src/services/auth'
import 'react-toastify/dist/ReactToastify.css'

const API_BASE_URL = process.env.WP_BASE_URL
const HomeModal = ({ open, setOpen }) => {
  const modalRef = useRef(null)
  const { authenticate } = useAuthentication()
  const [loading, setLoading] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState(null)
  const recaptchaRef = useRef()
  const [formData, setFormData] = useState({
    fullname: '',
    tel: '',
    email: '',
    message: '',
  })

  useOnClickOutside(modalRef, () => setOpen(false))

  const resetForm = () => {
    setFormData({
      // Set the form data to its initial state
      fullname: '',
      tel: '',
      email: '',
      message: '',
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRecaptchaChange = (value) => {
    // Handle the reCAPTCHA response
    console.log('Recaptcha value:', value)
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

      const apiUrl = `${API_BASE_URL}/wp-json/wp/v2/start-upsela/`

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
    <>
      {/* <div
        className={`modal-bg ${
          open ? 'open animate-fade-in' : 'animate-fade-out'
        }`}
      >
        HomeModal
      </div> */}
      <div className={`modal-container ${open ? 'open' : ''}`} ref={modalRef}>
        <button className="modal-close" onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="modal-right-content">
          <h3>Giving your vision a smooth transition to reality</h3>
          <p>
            By enabling an innovative digital experience that fulfills new-age
            demands.
          </p>
          <img src="/images/modal-image.png" alt="Vision" />
        </div>
        <div className="modal-form">
          <form onSubmit={handleSubmit}>
            <div className="modal-form-wrapper">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Message"
                  required
                />
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdQdl8pAAAAAIMgIuPKYRWLH3ncjqTpepcmfgKX"
                size="invisible"
                onChange={(value) => setRecaptchaValue(value)}
                className="recaptcha"
              />

              <button
                onClick={handleRecaptchaChange}
                type="submit"
                className={`btn btn--primary ${loading ? 'loading' : ''}`}
              >
                {loading ? (
                  <>
                    Sending <BeatLoader color="#ffff" loading={true} size={8} />
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default HomeModal
