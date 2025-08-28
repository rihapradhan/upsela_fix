import FundamentalItem from "../FundamentalItem/FundamentalItem"
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const Fundamental = () => {
  const { jsonData } = useSharedData()

  const FundamentalData = jsonData.FundamentalData
  return (
    <>
      <div className="fundamental p-tb-60">
        <div className="container">
          <h2 className="text-center m-b-60">
            Our Unique Approach To Customer <br /> Success Starts With 4
            Fundamentals
          </h2>
          <div className="fundamental-list">
          {FundamentalData.map((item, index) => {
              return (
                <FundamentalItem key={index}  FundamentalData={item}/>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default Fundamental
