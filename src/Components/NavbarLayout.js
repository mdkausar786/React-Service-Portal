import React from 'react'
import { Outlet } from 'react-router-dom';
import Navglobal from './Navglobal';
import Footer from './Footer';

 const NavbarLayout = () => {
  return (
    <div>
    <Navglobal/>  
   
    <Outlet/>
    <Footer />

    </div>
    
  )
}
export default NavbarLayout;
