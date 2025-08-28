const WebDevelopment = (props) => {
  // const { title, subTitle, para } = props.WebDevelopmentData
  const {
    title,
    service,
    description,
    heroImgSrc,
    titleSecondary,
    descriptionSecondary,
  } = props.webDevelopmentData
  return (
    <>
      <div className="web-development">
        <div className="container">
          <div className="row text-center">
            <p className="web-development-sub">{service}</p>
            <h2 className="page-heading">{title}</h2>
            <p className="hero-text">{description}</p>
            <div className="video-outer">
              <img src={heroImgSrc} alt="" className="video-bg" />
              {/* <img
                  src="/images/video-play-icon.png"
                  alt=""
                  className="video-play-icon"
                /> */}
            </div>
            <div className="secondaryInfos">
              <h3>{titleSecondary}</h3>
              <p>{descriptionSecondary}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebDevelopment
