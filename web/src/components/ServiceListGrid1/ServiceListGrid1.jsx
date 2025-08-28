import { Link } from '@redwoodjs/router'

import ServiceItem1 from '../ServiceItem1/ServiceItem1'

const ServiceData2 = [
  {
    imgSrc: 'images/devops.svg',
    title: 'DevOps',
    text: '  Upsela has been featured nationally in 2023 for our marketing strategies',
  },
  {
    imgSrc: 'images/submit-resume.svg',
    title: 'Professional Staffing & Recruitment',
    text: '  Upsela has been featured nationally in 2023 for our marketing strategies',
  },
  {
    imgSrc: 'images/project-management.svg',
    title: 'Project Management',
    text: '  Upsela has been featured nationally in 2023 for our marketing strategies',
  },
  {
    imgSrc: 'images/data-transfer.svg',
    title: 'Data Services',
    text: '  Upsela has been featured nationally in 2023 for our marketing strategies',
  },
]

const ServiceListGrid1 = ({ showServices1 }) => {
  return (
    <>
      <div
        className={`grid service-list-grid grid--4 ${
          showServices1 ? 'hide' : 'show'
        }`}
        id="services2"
      >
        {ServiceData2.map((item, index) => (
          <ServiceItem1
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            text={item.text}
          />
        ))}
        {/* <div className="grid-item">
          <div className="services-item">
            <div className="services-item-top">
              <img src="images/devops.svg" alt="" />
              <h3>DevOps</h3>
              <p>
                Upsela has been featured nationally in 2023 for our marketing
                strategies
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
              <img src="images/submit-resume.svg" alt="" />
              <h3>Professional Staffing & Recruitment</h3>
              <p>
                Upsela has been featured nationally in 2023 for our marketing
                strategies
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
              <img src="images/project-management.svg" alt="" />
              <h3>Project Management</h3>
              <p>
                Upsela has been featured nationally in 2023 for our marketing
                strategies
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
              <img src="images/data-transfer.svg" alt="" />
              <h3>Data Services</h3>
              <p>
                Upsela has been featured nationally in 2023 for our marketing
                strategies
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

export default ServiceListGrid1
