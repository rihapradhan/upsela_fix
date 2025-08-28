import React from 'react'

import BlogList from '../BlogList/BlogList'

const VideoInfo = (props) => {
  // console.log('data hereeee', props)
  return (
    <>
      {videoContent.map((item, index) => {
        return (
          <div key={index} className="blog-info">
            <div className="container">
              <div className="grid grid-blog-info">
                <div className="grid-item">
                  <h2>{item.parentTitle}</h2>
                </div>
                <div className="grid-item grid-blog-border scrollable">
                  <BlogList blogItems={item.data} isTitle={props.isTitle} />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default VideoInfo
