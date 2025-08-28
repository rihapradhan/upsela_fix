// import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const RestLists = ({ cardData }) => {
  // const { jsonData } = useSharedData()

  // const servicesRests = jsonData.rests.servicesRests
  {
    // console.log(`${cardData?.length}`)
  }
  return (
    <>
      <div className="rests p-tb-60">
        <div className="service-card__grid">
          {cardData?.map((data) => (
            <div
              key={data.id}
              className={`service-card ${
                !(cardData.length % 2 === 0) &&
                cardData.length < 7 &&
                'odd-count'
              }`}
            >
              <div className="service-card__icon">
                <img src={data.icon} alt="icon" />
              </div>
              <h4 className="service-card__title">{data.title}</h4>
              <p className="service-card__body">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RestLists
