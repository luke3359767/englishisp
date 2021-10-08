import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/MainPage' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Vlog' activeStyle>
            Vlog
          </NavLink>
          <NavLink to='/Blog' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/Blog' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Blog'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;