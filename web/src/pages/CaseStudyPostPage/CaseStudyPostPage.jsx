import React, { useEffect } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CaseStudy from 'src/components/CaseStudy/CaseStudy'
import CaseTop from 'src/components/CaseTop/CaseTop'
import Footer from 'src/components/Footer/Footer'
import Rests from 'src/components/Rests/Rests'
import ResultSolution from 'src/components/ResultSolution/ResultSolution'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

// const caseTop = {
//   title:
//     'DevSecOps Implemention : Enhancing Security for an Energy Services Firm',
//   img: '/images/case-slider1.png',
// }

// const rests = {
//   title: ' Challenges ',
//   restItems: [
//     {
//       img: '/images/heart.png',
//       para: ' Upsela is a software company on a mission to connect peopleand businesses with meaningful innovation. Upsela is asoftware company on a mission to connect people and businesses with meaningful innovation.',
//     },
//     {
//       img: '/images/heart.png',
//       para: ' Upsela is a software company on a mission to connect peopleand businesses with meaningful innovation. Upsela is asoftware company on a mission to connect people and businesses with meaningful innovation.',
//     },
//   ],
// }

const CaseStudyPostPage = () => {
  const { id } = useParams()
  const { sharedData, setSharedData } = useSharedData()
  const { jsonData } = useSharedData()

  // const servicesData = jsonData.servicesData
  // const cased = jsonData.cased
  const caseStudyPosts = jsonData.caseStudyPosts
  const casedTop = caseStudyPosts.find((data) => data.id === id).casedTop
  const caseStudyPost = caseStudyPosts.find((data) => data.id === id)
  const restsList = caseStudyPosts.find((data) => data.id === id)?.challenges

  // const restsList = jsonData.rests.restsList

  // useEffect(() => {
  //   // Access the shared data
  //   console.log(sharedData)
  // }, [sharedData, id])

  // console.log('data', caseStudyPosts.find((data) => data.id === id).casedTop)

  return (
    <>
      <div className="case-study-page">
        <div className="container">
          <Link to={`/case-studies`}>
            <img src="/images/arrow-right-1.svg" alt="" />
          </Link>
        </div>
        {/* <CaseTop cased={cased.casedTop} /> */}
        <CaseTop cased={casedTop} />

        <div className="wrap-bg">
          {caseStudyPosts.find((data) => data.id === id).uncommonContent && (
            <div
              className="container case-study-post p-tb-80 plain-content"
              dangerouslySetInnerHTML={{
                __html: caseStudyPosts.find((data) => data.id === id)
                  .uncommonContent,
              }}
            ></div>
          )}
          {restsList && (
            <Rests
              rests={restsList}
              challengesDescription={caseStudyPost?.challengesDescription}
              textCenter={false}
              state={true}
            />
          )}
          {caseStudyPost?.solutions && (
            <ResultSolution
              resultSolution={caseStudyPost?.solutions}
              solutionTitle={caseStudyPost?.solutionTitle}
              solutionDescription={caseStudyPost?.solutionDescription}
            />
          )}
          {caseStudyPost?.conclusions && (
            <p className="container">{caseStudyPost?.conclusions}</p>
          )}
        </div>
        <div className="case-study-post p-b-60 ">
          <CaseStudy title="More Case Studies" />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default CaseStudyPostPage
