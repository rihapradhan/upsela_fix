import { Link } from '@redwoodjs/router'

const CaseItem = (props) => {
  // const data = props.CaseData
  const item = props.data
  return (
    <>
      {/* {data.map((item, index) => ( */}
      {/* <div key={index} className="Case-Item"> */}
      <div className="Case-Item">
        <div className="row">
          <div className="case-detail">
            <div className="case-content">
              <h3>{item.casedTop?.title}</h3>
              <p>{item.para}</p>
              <div className="post-by">
                <img src="/images/postby.png" alt="" />
                <span>{item.author}</span>
              </div>
              <div className="arrow-slier text-right">
                <Link to={`/case-studies/${item.id}`}>
                  <img
                    src="/images/arrow-down-right1.svg"
                    alt=""
                    className="inline-block"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="case-image">
            <figure className="case-slider-img">
              <img src={item.img} alt="" />
            </figure>
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
  )
}

export default CaseItem
