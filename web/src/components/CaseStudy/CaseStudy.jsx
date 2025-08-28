import React, { useEffect, useState } from 'react'

import Slider from 'react-slick'

import { Link } from '@redwoodjs/router'

import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import CaseItem from '../CaseItem/CaseItem'

const CaseStudy = (props) => {
  const { jsonData } = useSharedData()

  // const CaseStudyData = jsonData.CaseStudyData
  const caseStudyPosts = jsonData.caseStudyPosts

  const [loading, setLoading] = useState(true)
  const CustomPrevArrow = (props) => <div {...props}>Previous</div>
  const CustomNextArrow = (props) => <div {...props}>Next</div>
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="case-study">
          <div className="container">
            <h2> {props.title} </h2>
            <div className="case-slider">
              <Slider {...settings} className="">
                {caseStudyPosts.map((item, index) => (
                  // <div key={index}>
                  //   <div className="row">
                  //     <div className="col-md-6">
                  //       <div className="case-content">
                  //         <h3>{item.title}</h3>
                  //         <p>{item.para}</p>
                  //         <div className="post-by">
                  //           <img src="/images/postby.png" alt="" />
                  //           <span>{item.author}</span>
                  //         </div>
                  //         <div className="arrow-slier text-right">
                  //           <Link to="">
                  //             <img
                  //               src="/images/arrow-down-right1.svg"
                  //               alt=""
                  //               className="inline-block"
                  //             />
                  //           </Link>
                  //         </div>
                  //       </div>
                  //     </div>
                  //     <div className="col-md-6">
                  //       <figure className="case-slider-img">
                  //         <img src={item.img} alt="" className="" />
                  //       </figure>
                  //     </div>
                  //   </div>
                  // </div>
                  <CaseItem key={index} data={item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CaseStudy
