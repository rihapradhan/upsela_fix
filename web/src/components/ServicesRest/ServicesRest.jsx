// import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import RestLists from '../RestLists/RestLists'
// import Rests from '../Rests/Rests'

const ServicesRest = (props) => {
  // const { jsonData } = useSharedData()

  // const servicesRests = jsonData.rests.servicesRests
  const { title, subTitle, cardData } = props.serviceCardData
  return (
    <div className="services-card__section">
      <div className="container">
        <div className="services-rest">
          <div className="services-rest-heading">
            <h2
              className="text-center"
              // dangerouslySetInnerHTML={{ __html: servicesRests.parentTitle }}
            >
              {title}
            </h2>

            <p
              className="text-center "
              // dangerouslySetInnerHTML={{ __html: servicesRests.parentSubTitle }}
            >
              {subTitle}
            </p>
          </div>
          <div className="services-rest-outer">
            <RestLists cardData={cardData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesRest
