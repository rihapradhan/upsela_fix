import { Link } from '@redwoodjs/router'

const ServiceItem1 = ({ imgSrc, title, text }) => {
  return (
    <>
      <div className="grid-item">
        <div className="services-item">
          <div className="services-item-top">
            <img src={imgSrc} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="services-item-bottom text-right">
            <Link href="">
              <img src="/images/arrow-down-right.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceItem1
