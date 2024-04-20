import React from 'react'
import "../../App.css"


// import { NavLink } from 'react-router-dom';
import { Nav, Bars, NavLink,  NavBtn, NavBtnLink, NavMenu } from './NavbarElements';




const Navbar = () => { 
  return(
    <> 
      <Nav>
        <NavLink to='/'>
          <img src={require("../../images/logo2_145x80.png")} alt="logo" className="imge" />
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/charges" activeStyle>
            Charges
          </NavLink>
          <NavLink to="/availability" activeStyle>
            Availability
          </NavLink>
          <NavLink to="/guidelines" activeStyle>
            Guidelines
          </NavLink>
          {/* <NavLink to="/gallery" activeStyle>
            Gallery
          </NavLink> */}
          <NavLink to="/contactus" activeStyle>
            Contact Us
          </NavLink>
          {/* <NavLink  to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink className={"btn1"} to="/login">
            SIGN IN
          </NavBtnLink>
          <NavBtnLink className={"btn2"} to="/form">
            BOOK NOW
          </NavBtnLink>
        </NavBtn>
      </Nav>    
    </>
  );
  
};


export default  Navbar;