import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const EmployersPage = () => {
  const { jsonData } = useSharedData()

  return (
    <>
      <MetaTags title="Employers" description="Employers page" />
      <Header />
      <>
        <div className="banner employers-banner">
          <img src="/images/employers-hero.png" alt="Employers banner" />
          <div className="container">
            <div className="banner-content">
              <h2
                dangerouslySetInnerHTML={{
                  __html: jsonData.employersPage.title,
                }}
              ></h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: jsonData.employersPage.subTitle,
                }}
              ></p>
              <Link to={`/contact`} className="btn btn--white m-t-10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="employers-body">
          <div className="container">
            <div className="employers-body-content">
              <h3>{jsonData.employersPage.more.title}</h3>
              <p>{jsonData.employersPage.more.para}</p>
              <ul>
                {jsonData.employersPage.more.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  )
}

export default EmployersPage
