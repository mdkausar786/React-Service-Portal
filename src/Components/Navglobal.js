import React, { useState } from "react";
// import Login from "./Login";
import { Form,push, FormControl, NavDropdown, Nav, Navbar, Container, Button, Figure } from 'react-bootstrap';
import logo2 from '../assets/logo2.jpg';
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import Image from '../assets/home.jpg';
import '../App.css';

import NavGlobal from '../Components/NavGlobal.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Navglobal() {



  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  const Close = () => setClick(false);
  
  const navigate =useNavigate();
  function Logout(){
    
      //  setUser({});
      // setUsername("");
      // setPassword("");
      
    localStorage.clear();

    navigate('/register')
  }

  return (
    <>
      <div>

        <div className={click ? "main-container" : ""} onClick={() => Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            {/* <NavLink exact to="/" className="nav-logo">
                React App
                <i className="fa fa-code"></i>
              </NavLink> */}
            <Navbar.Brand>
              <a href="#"> 
                <img src={logo2} style={{ width: 80, marginTop: -16,marginRight:'35rem' }} />
              </a>
            </Navbar.Brand>

            <ul className={click ? "nav-menu active" : "nav-menu"}>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/home"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/products"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/team"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/services"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="register">
                  <button onClick={Logout} className="btn btn-primary">Log out</button>
                </NavLink>

              </li>

            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>




    </>
  );





}
export default Navglobal;



