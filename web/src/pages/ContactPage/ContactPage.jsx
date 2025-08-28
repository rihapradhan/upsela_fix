import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ContactForm from 'src/components/ContactForm/ContactForm'
import Footer from 'src/components/Footer/Footer'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <div className="contact-page">
        <ContactForm />
        <div className="contact-map-outer p-tb-60">
          <div className="contact-info">
            <h2 className="m-b-30">Contact Details</h2>
            <div className="row">
              <div className="col-md-6 contact-address">
                {/* <div className="contact-address-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span>211 N Ervay St Ste 1700 #188Dallas, TX 75201</span>
                </div>
                <div className="contact-address-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <span>865 855 0210</span>
                </div>
                <div className="contact-address-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span>info@upselatalentsolutions.com</span>
                </div> */}
                <div className="main-address">
                  <h3>US Headquartes</h3>
                  <div className="contact-detail">
                    <p>
                      12100 Ford Street Suite # B153 | Farmers Branch | TX 75234
                      Dallas
                    </p>
                    <p>469 961 7014</p>
                    <p>contact@upsela.io</p>
                  </div>
                </div>
                <div className="other-address">
                  <h3>International Office</h3>
                  <div className="contact-detail">
                    <h4>UK</h4>
                    <p>
                      Swarn House, 300 High St, London W3 9BJ, United Kingdom
                    </p>
                    <p>+442036428555</p>
                    <p>info@upselatalentsolutions.com</p>
                  </div>
                  <div className="contact-detail">
                    <h4>Nepal</h4>
                    <p>Singanath Tole, Bindabasani, Pokhara Nepal</p>
                    <p>9856023969</p>
                    <p>info@upselatalentsolutions.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.4504277210112!2d-96.8929641252397!3d32.91269577704147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c27bd6952922f%3A0xbb232894f1073cea!2s12100%20Ford%20Rd%20Suite%20B153%2C%20Farmers%20Branch%2C%20TX%2075234%2C%20USA!5e0!3m2!1sen!2snp!4v1705827939621!5m2!1sen!2snp"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ContactPage
