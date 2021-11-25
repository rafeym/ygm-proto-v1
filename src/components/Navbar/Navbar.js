import React, { useState } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  BurgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements'

import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
              onClick={handleClick}
            >
              <NavIcon />
              YGM
            </NavLogo>
            <BurgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </BurgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  activeClass='active'
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}
                  onClick={handleClick}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}
                  onClick={handleClick}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  activeClass='active'
                  to='client'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}
                  onClick={handleClick}
                >
                  Clients
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}
                  onClick={handleClick}
                >
                  Services
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
