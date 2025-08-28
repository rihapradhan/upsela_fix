import React from 'react'

import Collapsible from '../Collaspsible/Collapsible'

const ServicesCollapsible = (props) => {
  const { title, collapsible } = props.serviceCollapsibleData
  return (
    <div className="services-collapsible">
      <div className="white-wrapper">
        <div className="container">
          <h3>{title}</h3>
          <Collapsible collapsibleData={collapsible} />
        </div>
      </div>
    </div>
  )
}

export default ServicesCollapsible
