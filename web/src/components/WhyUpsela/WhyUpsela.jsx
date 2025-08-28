import React, { useState, useEffect } from 'react'

import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import Button from '../Button/Button'
import UpselaBlock from '../UpselaBlock/UpselaBlock'

const WhyUpsela = () => {
  const { sharedData, jsonData } = useSharedData()

  useEffect(() => {
    // Access the shared data

    // console.log('data json', jsonData)
  }, [jsonData])

  const whyUpselaData = jsonData.whyUpselaData

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Add a scroll event listener
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const whyUpsela = document.querySelector('.why-upsela')

  let offset = 0

  if (whyUpsela) {
    offset = whyUpsela.getBoundingClientRect().top + window.scrollY / 2
  }

  const moveBlocks = () => {
    const block1 = document.querySelector('.upsela-block--1')
    const block2 = document.querySelector('.upsela-block--2')
    const block3 = document.querySelector('.upsela-block--3')
    const block4 = document.querySelector('.upsela-block--4')

    if (scrollY >= offset && window.innerWidth > 767) {
      // if (scrollY >= offset) {
      if (block1) {
        block1.classList.add('active')
      }
      if (block2) {
        block2.classList.add('active')
      }
      if (block3) {
        block3.classList.add('active')
      }
      if (block4) {
        block4.classList.add('active')
      }
    } else {
      if (block1) {
        block1.classList.remove('active')
      }
      if (block2) {
        block2.classList.remove('active')
      }
      if (block3) {
        block3.classList.remove('active')
      }
      if (block4) {
        block4.classList.remove('active')
      }
    }
  }

  useEffect(() => {
    moveBlocks()
  }, [scrollY, offset])

  return (
    <>
      <div className="why-upsela">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="upsela-img-wrap">
                <div className="wrap">
                  {whyUpselaData.map((item) => (
                    <UpselaBlock
                      number={item.number}
                      key={item.number}
                      imgSrc={item.imgSrc}
                      text={item.text}
                      active={scrollY >= offset && window.innerWidth > 767}
                    />
                  ))}
                </div>
                <img
                  src="/images/handshake.png"
                  alt=""
                  className="upsela-img border-radius-30 m-b-20"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex items-center ">
              <div className="up-sela-info">
                <h2
                  className="m-b-20 "
                  dangerouslySetInnerHTML={{
                    __html: jsonData.whyUpselaInfo.title,
                  }}
                ></h2>
                <div className="mobie-why-us-card">
                  {whyUpselaData.map((item) => (
                    <UpselaBlock
                      number={item.number}
                      key={item.number}
                      imgSrc={item.imgSrc}
                      text={item.text}
                      active={scrollY >= offset && window.innerWidth > 767}
                    />
                  ))}
                </div>

                <p
                  dangerouslySetInnerHTML={{
                    __html: jsonData.whyUpselaInfo.para,
                  }}
                ></p>

                {/* <ul className="upsela-list">
                  {jsonData.whyUpselaInfo.list.map((item, index) => {
                    return (
                      <li key={item.index}>{item}</li>
                    )
                  })}
                </ul> */}
                <Button
                  color="btn--primary"
                  text="Get In Touch"
                  link="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUpsela
