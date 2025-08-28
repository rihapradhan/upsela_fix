import FundamentalItem from '../FundamentalItem/FundamentalItem'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext';


const Offer = () => {
  const { jsonData } = useSharedData()

  const FundamentalData = jsonData.FundamentalData

  return (
    <>
      <div className="offer-outer m-t-80">
        <div className="container">
          <div className="offer">
            <h2 className="offer-title text-center m-b-30">
              our Website Should Clearly Present <br /> All That You Have To
              Offer
            </h2>
            <p className="text-center">
              Here’s How We Bring Impressive Websites To Life
            </p>
            <div className="fundamental-list m-t-80">
              {FundamentalData.slice(0, 3).map((item, index) => {
                return <FundamentalItem key={index} FundamentalData={item} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer
