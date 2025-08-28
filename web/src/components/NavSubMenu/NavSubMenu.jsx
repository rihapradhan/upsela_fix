import React, { useState, useRef } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useOnClickOutside } from 'src/lib/customHooks'

const NavSubMenu = ({ menuList, children, type }) => {
  const [open, setOpen] = useState(false)
  const subMenuRef = useRef()
  useOnClickOutside(subMenuRef, () => setOpen(false))

  return (
    <span ref={subMenuRef}>
      <button type="button" onClick={() => setOpen(!open)} className="nav-link">
        <span>{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M7 8L11 12L15 8"
            stroke="#131623"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className={`submenu ${open ? 'open' : ''}`}>
        {type === 'services' &&
          menuList?.map((item, index) => (
            <li key={index}>
              <Link
                to={routes.service({ id: item.label })}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        {type === 'resources' && (
          <>
            <li>
              <Link to={routes.blog()} onClick={() => setOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to={routes.case_studies()} onClick={() => setOpen(false)}>
                Case Studies
              </Link>
            </li>
          </>
        )}
      </ul>
    </span>
  )
}

export default NavSubMenu
