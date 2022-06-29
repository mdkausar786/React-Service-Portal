import React, { useState } from "react";
import Navglobal from "./Navglobal";
// import Login from "./Login";
import { Form, FormControl, Navbar, NavDropdown, Container,Nav, Button, Figure } from 'react-bootstrap';
import logo2 from '../assets/logo2.jpg';
import { Link } from "react-router-dom";
import Image from '../assets/home.jpg';
// import '../App.css';





const Home = () => {

  const [logout, setLogout] = useState(true);

  function handleClick() {

    setLogout(!logout);
  }

  
  return (
    
   <div>
     <Navglobal />
   </div>
  );



}

export default Home;

