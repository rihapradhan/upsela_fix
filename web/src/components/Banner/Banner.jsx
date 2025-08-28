import React from 'react'

import Slider from 'react-slick'

import { Link, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'

import VerticalTab from 'src/components/VerticalTab/VerticalTab'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import Button from '../Button/Button'

const Banner = ({ setModalOpen, bannerData, videoUrl }) => {
  const { id } = useParams()
  console.log('🚀 ~ file: Banner.jsx:13 ~ Banner ~ id:', id)

  const settings = {
    autoplay: true,
    autoplaySpeed: 7500,
    dots: true, // Display dots for slide navigation
    infinite: true, // Loop the slides
    speed: 800, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    fade: true,
    arrows: false,
  }

  const { jsonData } = useSharedData()

  return (
    <>
      <div className="banner">
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controls={false}
          style={{
            width: '100%',
            objectFit: 'cover',
            maxWidth: '100%',
            display: 'block',
          }}
        >
          <source
            src={videoUrl ? videoUrl : `/images/header-video.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="container">
          {bannerData?.length > 1 ? (
            <Slider {...settings} className="banner-inside">
              {bannerData?.map((banner) => (
                <div key={banner.id}>
                  <div className="banner-content">
                    <h2 dangerouslySetInnerHTML={{ __html: banner.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: banner.para }}></p>
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="btn btn--white m-t-10"
                    >
                      Get Started With UpSela
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="banner-content">
              <h2 dangerouslySetInnerHTML={{ __html: bannerData?.title }}></h2>
              <p dangerouslySetInnerHTML={{ __html: bannerData?.para }}></p>
              <Button
                link={routes.contact()}
                text="Contact Us"
                color="btn--white"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Banner
