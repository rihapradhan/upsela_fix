import React, { useState, useEffect } from 'react'
import { Link, routes, useLocation } from '@redwoodjs/router'

import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'
const StaticTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const { sharedData } = useSharedData()

  useEffect(() => {
    // Access the shared data
    console.log(sharedData)
  }, [sharedData])

  return (
    <div className="tab-section">
      <div className="container">
        <h3 className="m-b-30">Table of Content</h3>
        <div className="tabs-container">
          <div className="row">
            <div className="col-md-3">
              <div className="static-tabs">
                <div
                  className={`tab ${activeTab === 0 ? 'active' : ''}`}
                  onClick={() => handleTabClick(0)}
                >
                  The benefits of professional web development for your business
                </div>
                <div
                  className={`tab ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >
                  Developing your website
                </div>
                <div
                  className={`tab ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTabClick(2)}
                >
                  Finding the right professional web development professional
                </div>
                <div
                  className={`tab ${activeTab === 3 ? 'active' : ''}`}
                  onClick={() => handleTabClick(3)}
                >
                  Fostering a long-term relationship with your professional web
                  developer
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                {/* <h2>Blog Post {id}</h2> */}
                {/* {sharedData && (
                  <div>
                    <h3>{sharedData.item.title}</h3>
                    <p>{sharedData.item.ContentTitle}</p>
                    <img src={sharedData.item.imgSrc} alt="" />
                    <p>{sharedData.item.content}</p>
                  </div>
                )} */}
              </div>
              <div className="tab-content">
                {activeTab === 0 && (
                  <div>
                    {sharedData && (
                      <div>
                        <h2 className="m-b-30">
                          {sharedData.item.ContentTitle}
                        </h2>
                        <p>
                        {sharedData.item.content}
                        </p>{' '}
                        <br />
                        <p>
                          A website is a vital tool to showcase your products or
                          services, as well as improve customer experience and
                          accessibility. However, having a poorly designed
                          website could negatively affect your business's online
                          presence and reputation. Here is why it's essential to
                          invest in professional web development for your
                          business. A website is a vital tool to showcase your
                          products or services, as well as improve customer
                          experience and accessibility. However, having a poorly
                          designed website could negatively affect your
                          business's online presence and reputation. Here is why
                          it's essential to invest in professional web
                          development for your business.
                        </p>{' '}
                        <br />
                        <p>
                          A website is a vital tool to showcase your products or
                          services, as well as improve customer experience and
                          accessibility. However, having a poorly designed
                          website could negatively affect your business's online
                          presence and reputation. Here is why it's essential to
                          invest in professional web development for your
                          business.
                        </p>{' '}
                        <br />
                        <h2 className="m-b-20">Developing Websites</h2>
                        <p>
                       {sharedData.item.content}
                        </p>
                        <br />
                        <h3 className="m-b-20">Increased accessibility</h3>
                        <p>
                          A website is a vital tool to showcase your products or
                          services, as well as improve customer experience and
                          accessibility. However, having a poorly designed
                          website could negatively affect your business's online
                          presence and reputation. Here is why it's essential to
                          invest in professional web development for your
                          business.
                        </p>{' '}
                        <br />
                        <h3 className="m-b-20">Increased accessibility</h3>
                        <p>
                          A website is a vital tool to showcase your products or
                          services, as well as improve customer experience and
                          accessibility. However, having a poorly designed
                          website could negatively affect your business's online
                          presence and reputation. Here is why it's essential to
                          invest in professional web development for your
                          business.
                        </p>{' '}
                        <br />
                        <h3 className="m-b-20">Increased accessibility</h3>
                        <p>
                          A website is a vital tool to showcase your products or
                          services, as well as improve customer experience and
                          accessibility. However, having a poorly designed
                          website could negatively affect your business's online
                          presence and reputation. Here is why it's essential to
                          invest in professional web development for your
                          business.
                        </p>{' '}
                        <br />
                        <br /> <br />
                      </div>
                    )}
                  </div>
                )}
                {activeTab === 1 && <p>Content for Tab 2</p>}
                {activeTab === 2 && <p>Content for Tab 3</p>}
                {activeTab === 3 && <p>Content for Tab 4</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Example usage
const App = () => {
  return (
    <>
      <StaticTabs />
    </>
  )
}

export default App
