import { useState } from 'react'

import { Link } from '@redwoodjs/router'

import Button from '../Button/Button'
import HomeModal from '../HomeModal/HomeModal'

const Different = (props) => {
  const { contactMessage } = props
  const { para } = props
  const { different } = props
  const [openModal, setOpenModal] = useState(false)
  // const { Dtitle } = props.different.differentTalk
  return (
    <>
      <div className={`different p-tb-100 ${props.centered && 'centered'}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7">
              <div className="different-content">
                <h2
                  style={{
                    height: props.para ? 'auto' : '100%',
                    marginTop: props.para ? '64px' : '',
                  }}
                >
                  {contactMessage ? contactMessage : different.title}
                </h2>
                {props.para ? <p>{different.para}</p> : ''}
              </div>
            </div>
            {props.centered ? (
              <Link to={`/contact`} className="btn btn--white m-t-10 ">
                Let's Talk
              </Link>
            ) : (
              <div className="col-md-6 col-lg-5">
                <div className="different-talk">
                  <h3>Do you think we might be a good fit? Let&apos;s talk.</h3>
                  {/* <Button color="btn--primary" text="Get Started with Upsela" /> */}
                  <button
                    type="button"
                    className="btn btn--primary m-t-20"
                    onClick={() => setOpenModal(true)}
                  >
                    Get Started with UpSela
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <HomeModal open={openModal} setOpen={setOpenModal} />
    </>
  )
}

export default Different
