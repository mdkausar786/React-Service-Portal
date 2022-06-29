import React, { useState } from "react";
import Navglobal from "./Navglobal";
import logo2 from '../assets/logo2.jpg';
import { Link } from "react-router-dom";
import Image from '../assets/home.jpg';
// import '../App.css';
import Footer from './Footer'
import $ from 'jquery';


const Home = (props) => {


//   window.setTimeout(function() {
//     $(".alert").fadeTo(500, 0).slideUp(500, function(){
//         $(this).remove(); 
//     });
// }, 4000);





  return (
    <div> 
{/*       
      <div class="alert alert-success" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success!</strong> You have been signed in successfully!
</div> */}

      {/* {Alert{props.messag}} */}
    {/* <h1  style={{textAlign:'center',backgroundColor:'white'}}>Home Page</h1> */}
    <img style={{width:'-webkit-fill-available'}} src={Image} />  

    </div>
  )
}

    
export default Home;



        

        


