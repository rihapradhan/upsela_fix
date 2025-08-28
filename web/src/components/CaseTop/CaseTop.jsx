const CaseTop = (props) => {
  const data = props.cased

  return (
    <>
      <div className="case-top">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 d-flex case-title">
              {data?.subTitle && (
                <p className="case-top-sub">{data?.subTitle}</p>
              )}
              <h2 className="case-top-title">{data?.title}</h2>
            </div>
            <div className="col-md-6">
              <img src={data?.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseTop
