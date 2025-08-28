import { routes } from '@redwoodjs/router'

import Button from '../Button/Button'

const CareerPartner = () => {
  return (
    <>
      <div className="career-partner">
        <div className="container h-100">
          <div className="row h-100">
            <div className="offset-md-6 col-md-6 h-100">
              <div className="career-partner-content">
                <h2 className="career-partner-title text-white">
                  Finding great talent is possible when you partner with us.
                </h2>
                <p className="text-white">
                  Talent is first and foremost to ensure clients achieve their
                  goals, deliver successful results for their business and
                  customers.
                </p>
                <Button
                  link={routes.employers()}
                  text="Explore"
                  color="btn--white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerPartner
