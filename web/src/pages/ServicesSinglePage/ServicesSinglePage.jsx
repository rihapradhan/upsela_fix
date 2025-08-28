import { Link, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Different from 'src/components/Different/Different'
import Footer from 'src/components/Footer/Footer'
import Offer from 'src/components/Offer/Offer'
import OptionalServiceSection from 'src/components/OptionalServiceSection/OptionalServiceSection'
import ServicesCollapsible from 'src/components/ServicesCollapsible/ServicesCollapsible'
import ServicesRest from 'src/components/ServicesRest/ServicesRest'
import WebDevelopment from 'src/components/WebDevelopment/WebDevelopment'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const ServicesSinglePage = () => {
  const { id } = useParams()
  const { jsonData } = useSharedData()
  // const WebDevelopmentData = jsonData.WebDevelopmentData

  // console.log(id)
  const servicePageData = jsonData.servicesPageData.find(
    (data) => data.label === id
  ).headerData

  const serviceCollapsibleData = jsonData.servicesPageData.find(
    (data) => data.label === id
  ).serviceInfo

  // const different = jsonData.different
  const contactMessage = jsonData.servicesPageData.find(
    (data) => data.label === id
  ).contactMessage

  const serviceCardData = jsonData.servicesPageData.find(
    (data) => data.label === id
  ).serviceInfo2

  const optionalSectionData = jsonData.servicesPageData.find(
    (data) => data.label === id
  ).additionalInfo

  return (
    <>
      <MetaTags
        title={servicePageData.service}
        description="ServicesSingle page"
      />
      <div className="services-single">
        <WebDevelopment webDevelopmentData={servicePageData} />
        <ServicesCollapsible serviceCollapsibleData={serviceCollapsibleData} />
        <ServicesRest serviceCardData={serviceCardData} />
        {/* <Offer /> */}
        {optionalSectionData && (
          <OptionalServiceSection optionalSectionData={optionalSectionData} />
        )}
        <Different contactMessage={contactMessage} para={false} />
      </div>
      <Footer />
    </>
  )
}

export default ServicesSinglePage
