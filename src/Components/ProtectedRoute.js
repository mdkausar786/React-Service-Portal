import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import Login from './Login';
import Home from './Home';
import { render } from "react-dom";
import Team from './Team';

import Login from './Login';



function ProtectedRoute(props){
  let Cmp=props.Cmp


  const navigate =useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("userPassword"))
    {
       navigate('register');
    }

  },[])

  return (

 <div>
 
   <Cmp/>


 </div>

  )


}

export default ProtectedRoute;






// function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (isAuth) {
//           return <Component />
//         }
//         else {
//           return (
//             <Navigate to="/register" />
//           );
//         }
//       }
//       }
//     />
//   );
// }



