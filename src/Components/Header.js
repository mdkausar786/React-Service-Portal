import React, { useState } from "react";
// import Login from "./Login";
import { Form,push, FormControl, NavDropdown, Nav, Navbar, NavLink, Container, Button, Figure } from 'react-bootstrap';
import logo2 from '../assets/logo2.jpg';
import { Link } from 'react-router-dom';
import NavGlobal from '../Components/NavGlobal.css';
import '../App.css';




function Header() {


    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
  
    const Close = () => setClick(false);
  
  

  
  return (
    <>
      <div>

        <div className={click ? "main-container" : ""} onClick={() => Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            {/* <Link exact to="/" className="nav-logo">
                React App
                <i className="fa fa-code"></i>
              </Link> */}
            <Navbar.Brand>
              <a href="#"> 
                <img src={logo2} style={{ width: 80, marginTop: -16,marginRight:'71rem' }} />
              </a>
            </Navbar.Brand>

             <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>




    </>
  );
}

export default Header;



