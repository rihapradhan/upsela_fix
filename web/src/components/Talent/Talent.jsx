import Skeleton from 'react-loading-skeleton'

import { Link, routes } from '@redwoodjs/router'

import Button from '../Button/Button'
import 'react-loading-skeleton/dist/skeleton.css'
const Talent = (props) => {
  // console.log('🚀 ~ file: Talent.jsx:5 ~ Talent ~ props:', props.posts[0]?.id)

  return (
    <>
      <div className="talent">
        <div className="container">
          <div className="row">
            <div className="offset-md-6 col-md-6">
              <div className="talent-content">
                <h2>Sparkling Brilliance through Talent Dynamics</h2>
                <p>
                  Illuminating brilliance: encouraging innovation. defining
                  excellence, and enabiling adaptability{' '}
                </p>
                <Button
                  link={routes.careers()}
                  text="Find Talent"
                  color="btn--white"
                />
              </div>

              <div className="talent-insight">
                <p className="talent-insight-title">
                  {props.loading ? (
                    <Skeleton width={200} height={20} />
                  ) : (
                    <Link to={routes.blog()}>Insights</Link>
                  )}
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h3>
                      {props.loading ||
                      !props.posts ||
                      props.posts.length === 0 ? (
                        <Skeleton width={300} height={20} />
                      ) : (
                        props.posts[0].title.rendered
                      )}
                    </h3>
                    <Link
                      to={`/blog/${
                        props.posts && props.posts.length > 0
                          ? props.posts[0]?.id
                          : ''
                      }`}
                      className="text-white text-uppercase"
                    >
                      {props.loading ? (
                        <Skeleton width={50} height={20} />
                      ) : (
                        'view'
                      )}
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <h3>
                      {props.loading ||
                      !props.posts ||
                      props.posts.length < 2 ? (
                        <Skeleton width={300} height={20} />
                      ) : (
                        props.posts[1].title.rendered
                      )}
                    </h3>
                    <Link
                      to={`/blog/${
                        props.posts && props.posts.length > 1
                          ? props.posts[1]?.id
                          : ''
                      }`}
                      className="text-white text-uppercase"
                    >
                      {props.loading ? (
                        <Skeleton width={50} height={20} />
                      ) : (
                        'view'
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Talent
