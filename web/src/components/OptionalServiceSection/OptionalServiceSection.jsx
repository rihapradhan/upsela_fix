import React from 'react'

const OptionalServiceSection = (props) => {
  const { optionalSectionData } = props

  return (
    <div className="secondaryInfosSection">
      <div className="container">
        <div className="row text-center">
          <div className="secondaryInfos">
            {optionalSectionData.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OptionalServiceSection
