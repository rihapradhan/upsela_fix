import React from 'react'

import BlogList from '../BlogList/BlogList'

const BlogInfo = (props) => {
  const data = props.postData ? props.postData : null

  const bgColor = props.bgColor

  const title = props.isTitle
  const isVideo = props.isVideo
  const scrollable = props.isScrollable

  return (
    <>
      <div
        className={`grid-item grid-blog-border ${
          scrollable ? 'scrollable' : ''
        }`}
      >
        <BlogList
          blogItems={data}
          isTitle={props.isTitle}
          isButton={props.isButton}
          isVideo={props.isVideo}
        />
      </div>
    </>
  )
}

export default BlogInfo
