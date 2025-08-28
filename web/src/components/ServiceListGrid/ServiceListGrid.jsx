import { Link } from '@redwoodjs/router'

import ServiceItem from '../ServiceItem/ServiceItem'

const ServiceData1 = [
  {
    imgSrc: 'images/web-development.svg',
    title: 'Web Development',
    text: '  Lorem ipsum dolor sit amet consectet',
  },
  {
    imgSrc: 'images/google-mobile.svg',
    title: 'Mobile Application Development',
    text: '  Lorem ipsum dolor sit amet consectet',
  },
  {
    imgSrc: 'images/source-code.svg',
    title: 'Software Development',
    text: '  Lorem ipsum dolor sit amet consectet',
  },
  {
    imgSrc: 'images/cloud-computing.svg',
    title: 'Cloud Computing',
    text: '  Lorem ipsum dolor sit amet consectet',
  },
]

const ServiceListGrid = ({ showServices1 }) => {
  return (
    <>
      <div
        className={`grid service-list-grid grid--4 ${
          showServices1 ? 'show' : 'hide'
        }`}
        id="services1"
      >
        {ServiceData1.map((item, index) => (
          <ServiceItem
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            text={item.text}
          />
        ))}

        {/* <div className="grid-item">
          <div className="services-item">
            <div className="services-item-top">
              <img src="images/web-development.svg" alt="" />
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ullam rerum magni alias quos
              </p>
            </div>
            <div className="services-item-bottom text-right">
              <Link href="">
                <img src="images/arrow-down-right.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="services-item">
            <div className="services-item-top">
              <img src="images/google-mobile.svg" alt="" />
              <h3>Mobile Application Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ullam rerum magni alias quos
              </p>
            </div>
            <div className="services-item-bottom text-right">
              <Link href="">
                <img src="images/arrow-down-right.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="services-item">
            <div className="services-item-top">
              <img src="images/source-code.svg" alt="" />
              <h3> Software Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ullam rerum magni alias quos
              </p>
            </div>
            <div className="services-item-bottom text-right">
              <Link href="">
                <img src="images/arrow-down-right.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="services-item">
            <div className="services-item-top">
              <img src="images/cloud-computing.svg" alt="" />
              <h3>Cloud Computing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ullam rerum magni alias quos
              </p>
            </div>
            <div className="services-item-bottom text-right">
              <Link href="">
                <img src="images/arrow-down-right.svg" alt="" />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ServiceListGrid
