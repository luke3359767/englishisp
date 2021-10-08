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
          <h2>Luke's Literacy Review</h2>
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
          <NavLink to='/AboutTexts' activeStyle>
          AboutTexts
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Contact'>Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;