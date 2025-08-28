import React, { useState } from 'react'

import AnimateHeight from 'react-animate-height'

import { Link, routes } from '@redwoodjs/router'

import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const Services = () => {
  const { jsonData } = useSharedData()
  const servicesData = jsonData.servicesData

  const [heights, setHeights] = useState(Array(servicesData.length).fill(0))

  const handleMouseEnter = (index) => {
    setHeights((prevHeights) =>
      prevHeights.map((height, i) => (i === index ? 'auto' : 0))
    )
  }

  const handleMouseLeave = () => {
    setHeights(Array(servicesData.length).fill(0))
  }

  return (
    <div className="services">
      <div className="container">
        <h2 className="text-white m-b-30">Services</h2>
        <div className="services-list grid ">
          {servicesData.map((item, index) => (
            // <div className="service-list-grid grid--4">
            <div
              key={index}
              className="grid-item service-list-grid grid--4"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="services-item">
                <div className="services-item-top">
                  <img src={item.imgSrc} alt="" />
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                  <AnimateHeight
                    duration={400}
                    height={heights[index]}
                    animateOpacity={true}
                  >
                    <p>{item.text}</p>
                  </AnimateHeight>
                </div>
                <div className="services-item-bottom text-right">
                  <Link to={routes.service({ id: item.label })}>
                    <img src="/images/arrow-down-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
