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
                        <NavLogo to='/'>
                            <NavIcon />
                            YGM
                        </NavLogo>
                        <BurgerIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </BurgerIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/about'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/clients'>Clients</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>Services</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
