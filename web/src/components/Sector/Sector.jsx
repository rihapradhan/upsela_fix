import React, { useRef, useState } from 'react'

import Slider from 'react-slick'

export const sectorItems = [
  {
    id: 1,
    title: 'Financial Services',
    content: 'Driving innovation in finance for a dynamic world.',
    imgSrc: '/images/financial-industry.jpg',
  },
  {
    id: 2,
    title: 'Energy',
    content: 'Powering a sustainable future, one solution at a time',
    imgSrc: '/images/energy-industry.jpg',
  },
  {
    id: 3,
    title: 'Automotive',
    content: 'Navigating the future of mobility with tech-driven solutions.',
    imgSrc: '/images/automotive-industry.jpg',
  },
  {
    id: 4,
    title: 'Real State',
    content: 'Seamless property management, redefined by technology.',
    imgSrc: '/images/real-estate-industry.jpg',
  },
  {
    id: 5,
    title: 'Telecom',
    content: 'Connecting the world with cutting-edge telecommunications.',
    imgSrc: '/images/telecom-industry.jpg',
  },
  {
    id: 6,
    title: 'Aviation',
    content: 'Bringing safety and efficiency to the skies.',
    imgSrc: '/images/aviation-industry.jpg',
  },
  {
    id: 7,
    title: 'Government',
    content: 'Digital transformation for streamlined governance.',
    imgSrc: '/images/government-industry.jpg',
  },
  {
    id: 8,
    title: 'Healthcare',
    content: 'Revolutionizing patient care through tech advancements.',
    imgSrc: '/images/healthcare-industry.jpg',
  },
  {
    id: 9,
    title: 'Manufacturing',
    content: 'Smart solutions for enhanced productivity.',
    imgSrc: '/images/manufacturing-industry.jpg',
  },
  {
    id: 10,
    title: 'Retail',
    content: 'Crafting immersive retail experiences for the modern era.',
    imgSrc: '/images/retail-industry.jpg',
  },
]

const Sector = () => {
  const sectorItemsLength = sectorItems.length
  const [activeItemId, setActiveItemId] = useState(1)
  const [buttonClicked, setButtonClicked] = useState('increased')
  const slider = useRef(null)

  const next = () => {
    setButtonClicked('increased')
    slider.current.slickNext()
  }

  const previous = () => {
    setButtonClicked('decreased')
    slider.current.slickPrev()
  }

  const updateActiveItem = (itemId) => {
    const a = itemId
    setActiveItemId(a)
  }

  const NextArrow = ({ className, onClick, style }) => {
    return (
      <button className={className} style={{ ...style }} onClick={onClick}>
        <img src="/images/slick-arrow-right.svg" alt="slide-next" />
      </button>
    )
  }

  const PrevArrow = ({ className, onClick, style }) => {
    return (
      <button className={className} style={{ ...style }} onClick={onClick}>
        <img src="/images/slick-arrow-left.svg" alt="slide-prev" />
      </button>
    )
  }

  // const handleMouseLeave = () => {
  //   setHoveredItem(null)
  // }

  const industrySliderSettings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // beforeChange: (current) => {},
    beforeChange: (current) => {
      let itemId = activeItemId
      if (buttonClicked === 'decreased') {
        if (itemId == 1) {
          itemId = sectorItemsLength + 1
        }

        updateActiveItem(itemId - 1)
      }
      if (buttonClicked === 'increased') {
        if (itemId == sectorItemsLength) {
          itemId = 0
        }

        updateActiveItem(itemId + 1)
      }
      setButtonClicked('increased')
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="sector">
        <div className="sector-heading">
          <h2 className="mb-0">Industries We Serve</h2>
        </div>
        <div className="sector-images">
          {sectorItems.map((item) => (
            <img
              key={item.id}
              className={item.id === activeItemId ? 'active' : ''}
              src={item.imgSrc}
              alt={item.title}
            />
          ))}
        </div>

        {/* <div className="sector-grid"> */}
        <Slider
          {...industrySliderSettings}
          className="sector-grid"
          ref={slider}
        >
          {sectorItems.map((item) => (
            <div
              key={item.id}
              className={`sector-grid-item ${
                item.id === activeItemId ? 'hovered' : ''
              }`}
              onMouseEnter={() => updateActiveItem(item.id)}
              // onMouseLeave={handleMouseLeave}
            >
              <div className="sector-description">
                <h3>{item.title}</h3>
                <div className="sector-content">{item.content}</div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="slider-button-group" style={{ textAlign: 'center' }}>
          <button
            className="slider-button slider-button-prev"
            onClick={() => {
              previous(activeItemId - 1)
            }}
          >
            <img src="/images/slick-arrow-left.svg" alt="slide-prev" />
          </button>
          <button
            className="slider-button slider-button-next"
            onClick={() => {
              next(activeItemId + 1)
            }}
          >
            <img src="/images/slick-arrow-right.svg" alt="slide-next" />
          </button>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Sector
