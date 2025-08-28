import React from 'react'

const Modal = ({ flag, teamHandle }) => {
  const handleOuterClick = (event) => {
    if (event.target.classList.contains('modal-outer')) {
      teamHandle()
    }
  }
  return (
    <div
      className={`modal-outer ${flag ? 'show' : ''}`}
      onClick={handleOuterClick}
    >
      <div className="modal-wrap">
        <div className="cross" onClick={teamHandle}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="modal">
          <div className="avatar-content m-b-20">
            <div className="avatar">
              <img
                className="img-avatar m-b-30"
                src="images/client-thumbnail.jpg"
                alt=""
              />
            </div>
            <div className="avatar-body">
              <div className="testimonial-name m-t-30">
                <strong>Dave Martin</strong>
              </div>
              <div className="avatar-date">CEO</div>
            </div>
          </div>
          <div className="modal-content">
            <p>
              With over fifteen years of experience implementing data-driven
              marketing and sales tactics, Dave is routinely sought out for his
              ability to scale companies with marketing and growth hacking
              protocols. Dave and his team have pioneered the first true
              attribution and marketing model for banks and credit unions that
              tracks an ad click to a closed loan, enabling a digital campaign
              to be optimized with funded application data. As a winner of the
              “40 Under 40” award, Dave holds an MBA from the Craig School of
              Business and was a featured speaker on Google Advertising at SXSW
              (South By Southwest), the nation’s largest interactive conference.
            </p>{' '}
            <br />
            <p>
              When he's not obsessing about marketing data attribution, Dave
              plays the guitar in his church's worship band and his dream is to
              be the ultimate campfire guitarist! Dave is married and is a
              father of two beautiful girls and a French Bulldog named Cookie.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
