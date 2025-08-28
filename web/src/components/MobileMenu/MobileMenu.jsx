import React, { useState, useEffect, useRef } from 'react'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link, routes } from '@redwoodjs/router'

import { useOnClickOutside } from 'src/lib/customHooks'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const MobileMenu = () => {
  const { jsonData } = useSharedData()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [isSubmenu2Open, setIsSubmenu2Open] = useState(false)
  const [menuOverlay, setMenuOverlay] = useState(null)
  const servicesMenu = jsonData.servicesMenu
  const menuOverlayRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    // Check if window is defined before accessing it
    // if (typeof window !== 'undefined') {
    //   setMenuOverlay(window.document.querySelector('.menuOverlay'))
    // }
    isOpen
      ? menuOverlayRef.current.classList.add('show')
      : menuOverlayRef.current.classList.remove('show')
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)

    // Check if menuOverlay is defined before accessing it
    if (menuOverlay) {
      menuOverlay.classList.add('show')
    }
  }

  useOnClickOutside(mobileMenuRef, () => setIsOpen(false))

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }

  const toggleSubmenu2 = () => {
    setIsSubmenu2Open(!isSubmenu2Open)
  }

  const menuOverlayClick = () => {
    if (isOpen) {
      toggleMenu()
    }
  }

  const closeMenu = () => {
    if (isOpen) {
      toggleMenu()
    }
  }

  return (
    <>
      {/* {menuOverlay && ( */}
      <div
        className="menuOverlay"
        onClick={menuOverlayClick}
        ref={menuOverlayRef}
      >
        {' '}
      </div>
      {/* )} */}
      <div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        ref={mobileMenuRef}
      >
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul className="menu-items">
          <li>
            <Link to={routes.home()} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={routes.about()} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          {/* <li>
            <Link to={routes.service()} onClick={closeMenu}>
              Services
            </Link>
          </li> */}
          <li className={`submenu ${isSubmenuOpen ? 'active' : ''}`}>
            <button type="button" onClick={toggleSubmenu}>
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M7 8L11 12L15 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="submenu-items">
              {servicesMenu?.map((item, index) => (
                <li key={index}>
                  <Link
                    to={routes.service({ id: item.label })}
                    onClick={() => {
                      closeMenu()
                      toggleSubmenu()
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={`submenu ${isSubmenu2Open ? 'active' : ''}`}>
            <button type="button" onClick={toggleSubmenu2}>
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M7 8L11 12L15 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="submenu-items">
              <li>
                <Link
                  to={routes.blog()}
                  onClick={() => {
                    closeMenu()
                    toggleSubmenu2()
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to={routes.case_studies()}
                  onClick={() => {
                    closeMenu()
                    toggleSubmenu2()
                  }}
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link to={routes.blog()}>Blogs</Link>
          </li>
          <li>
            <Link to={routes.case_studies()}>Case Studies</Link>
          </li> */}
          <li>
            <Link to={routes.careers()} onClick={closeMenu}>
              Careers
            </Link>
          </li>
          <li>
            <Link to={routes.contact()} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu
