import React, { useState, useEffect } from 'react'

import { useLocation } from '@redwoodjs/router' // Import the useRouter hook

import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

import 'animate.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const UpselaLayout = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const location = useLocation() // Get the current route information

  useEffect(() => {
    setLoading(true) // Set loading to true whenever the route changes

    // Simulate a loading delay of 3 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false)
    }, 500)

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout)
  }, [location.pathname]) // Run whenever the route changes

  return (
    <>
      <Header />
      {loading ? (
        ""
      ) : (
      <main>{children}</main>
        )}
      {/* <Footer /> */}
    </>
  )
}

export default UpselaLayout
