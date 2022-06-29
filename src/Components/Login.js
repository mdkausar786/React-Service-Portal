import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import { Link, Navigate, Route, Router } from "react-router-dom";
import Registration from "./Registeration";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';









function Login({ }) {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [pop, setPop] = useState(false);

  const [home, setHome] = useState(true);

  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState('');



  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("userPassword").replace(/"/g, "");
    let mail = localStorage.getItem("userEmail").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    }



    else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);

    }

    else {
      // setHome(!home);
      console.log("Login Successfully");

      toast.success("You are successfully logged in", {
        position: "top-center",
        autoClose: 1900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    
      });
    
      setTimeout(() => {
    
        setHome(!home);
    
      }, 2000);
    
    



      setPop(true)
      setFlag(false);

    }
  }

  function handleClick() {
    setRegister(!register);
    // < Registration/>
  }

  function handleClick(e) {
    // e.preventDefault()
    setRegister(register)
  }


  




  







  return (


    <div  >
      <Header />
      {/* {pop && (<Alert color="primary" variant="warning">
             <h1>Successfully Login </h1>
          </Alert>
          )} */}


<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>



      {home ? (
        <form className="container" style={{ width: "396px", height: "325px", backgroundColor: '#15cbf0', marginTop: '10%', }} onSubmit={handleLogin}>
          {/* <h3>LogIn</h3> */}
          <div className="form-group" style={{ paddingTop: '50px' }}>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group" style={{ paddingTop: '10px' }}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          {/* <Link to="/home"> */}
          <div>
            <button 
            // onClick={{ Pop }}
             type="submit" className="btn btn-primary btn-lg btn-block">
              Login
            </button>
          </div>

          {/* </Link> */}

          <Link to="/register">
            <h2 style={{ color: "white", fontSize: '1rem' }} onClick={handleClick} className="forgot-password text-right">
              Need an account ?{" "}Register </h2>
          </Link>

          {/* <div> <p>Need an account ? Register</p></div> */}

          {flag && (
            <Alert color="primary" variant="warning">
              Fill enter correct email and password
            </Alert>
          )}


        </form>
      ) : (

        <Navigate to="/home" element={<Home />} />

      )

      }

    </div>
  );
}

export default Login;
