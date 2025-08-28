import { Link, routes } from '@redwoodjs/router'

import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import Button from '../Button/Button'

const Opportunity = () => {
  const { jsonData } = useSharedData()
  const caseStudies = jsonData.caseStudyPosts

  return (
    <>
      <div className="opportunity">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="talent-content">
                <h2>
                  Optimizing Operations for Seamless Innovation and Deployment
                </h2>
                <p>
                  Enabling software development efficiency and agility through
                  our comprehensive DevOps services, facilitating faster
                  innovation, and robust deployment strategies.{' '}
                </p>
                <Button
                  link="/about"
                  text="Explore Opportunities"
                  color="btn--white"
                />
              </div>
              <img
                src="/images/sparkling-02.png"
                alt=""
                className="img-inbetween"
              />
              <div className="talent-insight">
                <p className="talent-insight-title">
                  <Link to={routes.caseStudies()}>Case Studies</Link>
                </p>
                {/* {console.log(caseStudies)} */}
                <div className="row">
                  {caseStudies?.map((item, index) => {
                    if (!(index > 1)) {
                      return (
                        <div key={item.id} className="col-md-6">
                          <h3>{item.casedTop?.title}</h3>
                          <Link
                            className="text-white text-uppercase"
                            to={routes.case_post({ id: item.id })}
                          >
                            view
                          </Link>
                        </div>
                      )
                    }
                  })}
                  {/* <div className="col-md-6">
                    <h3>
                      Improving productivity with digital field workforce
                      management
                    </h3>
                    <Link className="text-white text-uppercase" to="/about">
                      view
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <h3>
                      Improving productivity with digital field workforce
                      management
                    </h3>
                    <Link className="text-white text-uppercase" to="/about">
                      view
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <img src="../images/sparkling-02.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Opportunity
