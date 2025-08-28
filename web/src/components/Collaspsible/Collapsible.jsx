import React, { useState } from 'react'

const Collapsible = ({ collapsibleData }) => {
  // const { collapsibleData } = props.collapsibleData
  const [activeItem, setActiveItem] = useState(1)

  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        {collapsibleData.map((item) => (
          <div
            key={item.id}
            className={`collapsible-item ${item.id === activeItem && 'active'}`}
          >
            <button
              className="collapsible-header"
              onClick={() => setActiveItem(item.id)}
            >
              <div className="header-icon">
                <img src={item.icon} alt="collapsible header icon" />
              </div>
              <h4>{item.title}</h4>
            </button>
            <p
              className="collapsible-content lists"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
            <div
              className={`show-on-mobile collapsible-image ${
                item.id === activeItem && 'active'
              }`}
            >
              <img src={item.imgSrc} alt="collapsible" />
            </div>
          </div>
        ))}
      </div>
      <div className="hide-on-mobile col-md-6 col-lg-5 offset-lg-1">
        {collapsibleData.map((item) => (
          <div
            key={item.id}
            className={`collapsible-image ${
              item.id === activeItem && 'active'
            }`}
          >
            <img src={item.imgSrc} alt="collapsible" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collapsible
