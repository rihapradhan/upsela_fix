import ReactPlayer from 'react-player'

import BtnLink from '../BtnLink/BtnLink'
const BlogItem = (props) => {
  const item = props.blogItem
  const isVideo = props.isVideo
  let videoUrl = null
  if (item.post_content && isVideo) {
    const embedMatch = item.post_content.match(
      /\"url\":\"(https:\/\/www\.youtube\.com\/watch\?v=[^\"]+)\"/
    )
    const videoMatch = item.post_content.match(
      /<video controls src=\"([^\"]+)\"/
    )

    if (embedMatch) {
      videoUrl = embedMatch[1]
    } else if (videoMatch) {
      videoUrl = videoMatch[1]
    }
  }

  return (
    <>
      <div className="blog-info-item">
        <div className="row">
          <div className="col-md-7">
            <div className="blog-content-left">
              {props.isTitle ? <h3>{item.title.rendered}</h3> : null}
              {!isVideo && (
                <p
                  dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                ></p>
              )}

              {isVideo && <p>{item.post_title}</p>}
              <div className="btn-outer text-right">
                {!isVideo && props.isButton ? (
                  <BtnLink
                    color="btn--primary-outline-transparent"
                    text="Learn More"
                    id={item.id}
                    item={item}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {!isVideo ? (
            <div className="col-md-5">
              {item._embedded && item._embedded['wp:featuredmedia'] ? (
                <img
                  className="border-radius-30"
                  src={item._embedded['wp:featuredmedia'][0].source_url}
                  alt="Featured"
                />
              ) : (
                <img
                  src="/images/slider1.jpg"
                  alt="Default"
                  className="border-radius-30"
                />
              )}
            </div>
          ) : (
            <div className="col-md-5">
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BlogItem
