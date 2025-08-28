import React, { useEffect, useState } from 'react'

import WOW from 'react-wow'

import Button from '../Button/Button'

const AboutInfo = (props) => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 768 : false
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="about-info">
        <div className="about-center">
          <div className="grid about-grid">
            <div className="grid-item pl">
              <div>
                {/* <h2 className="m-b-20">{props.aboutData.title}</h2> */}
                <h2 className="about-title">{props.aboutData.aboutTitle}</h2>
                <div
                  className="about-para"
                  dangerouslySetInnerHTML={{
                    __html: props.aboutData.para,
                  }}
                ></div>

                {/* <ul className="about-list">
                  {props.aboutData.aboutList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}

                {/* {props.btn ? (
                  <Button color="btn--primary" link="/about" text="Learn More About us" />
                ) : (
                  ''
                )} */}
              </div>
            </div>
            <div className="grid-item">
              {isDesktop && (
                <WOW
                  animation="slideInRight"
                  duration="1.5s"
                  data-wow-offset="100"
                >
                  <img
                    src="/images/company-overview.jpg"
                    alt=""
                    className="about-img"
                  />
                </WOW>
              )}
              {!isDesktop && (
                <img
                  src="/images/company-overview.jpg"
                  alt=""
                  className="about-img"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutInfo
