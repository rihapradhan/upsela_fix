import { useEffect } from 'react'

const Partners = () => {
  useEffect(() => {
    const scroller = document.querySelector('.scroller')

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      addAnimation()
    }

    function addAnimation() {
      // scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute('data-animated', true)

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector('.scroller__inner')
      const scrollerContent = Array.from(scrollerInner.children)

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
      })
      // })
    }
  }, [])

  return (
    <>
      <div className="partner">
        <div className="container">
          <h3 className="partner-title text-center">
            Fostering Success through Collaboration and Innovation with{' '}
            <span>Industry Leaders</span>
          </h3>
          <div
            className="scroller scrolling-container"
            data-direction="left"
            data-speed="fast"
          >
            <div className="scroller__inner">
              <div>
                <img
                  src="/images/google-img.png"
                  alt="Scrolling"
                  className="scrolling-image"
                />
              </div>
              <div>
                <img
                  src="/images/t-mobile.png"
                  alt="Scrolling"
                  className="scrolling-image"
                />
              </div>
              <div>
                <img
                  src="/images/Randstad_Logo.png"
                  alt="Scrolling"
                  className="scrolling-image"
                />
              </div>
              <div>
                <img
                  src="/images/Delta-Air-Lines-Logo.png"
                  alt="Scrolling"
                  className="scrolling-image"
                />
              </div>
              <div>
                <img
                  src="/images/Cigna-Logo.png"
                  alt="Scrolling"
                  className="scrolling-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners
