import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import NavSubMenu from '../NavSubMenu/NavSubMenu'

const Navbar = () => {
  const { jsonData } = useSharedData()
  const servicesMenu = jsonData.servicesMenu
  const resourcesMenu = jsonData.resourcesMenu

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li className="nav-item has-submenu">
            <NavSubMenu menuList={servicesMenu} type="services">
              Services
            </NavSubMenu>
          </li>
          <li className="nav-item has-submenu">
            <NavSubMenu type="resources">Resources</NavSubMenu>
          </li>
          {/* <li>
            <Link to={routes.blog()}>Blogs</Link>
          </li>
          <li>
            <Link to={routes.case_studies()}>Case Studies</Link>
          </li> */}
          <li>
            <Link to={routes.careers()}>Careers</Link>
          </li>
          <li>
            <Link to={routes.about()}>About Us</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
