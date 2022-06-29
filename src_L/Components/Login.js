import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import Registration from "./Registeration";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  const [register, setRegister] = useState(false);


  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("userPassword").replace(/"/g, "");
    let mail = localStorage.getItem("userEmail").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  // function handleClick(){
  //   setRegister(!register);
  //   // < Registration/>
  // }

  function handleClick(e) {
    // e.preventDefault()
    setRegister(register)
  }

  // <a href="/" onClick={handleClick}>register?</a>

  return (
    <div >
      
            

            {home ? (
              <form className="container"  style={{width:"396px",height:"409px", backgroundColor:'rgb(10 143 102)', marginTop:'10%',}} onSubmit={handleLogin}>
                {/* <h3>LogIn</h3> */}
                <div className="form-group" style={{paddingTop:'50px'}}>
                  <label>Email</label>
                  <input 
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(event) => setEmaillog(event.target.value)}
                  />
                </div>

                <div className="form-group" style={{paddingTop:'10px'}}>
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(event) => setPasswordlog(event.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Login
                </button>

                <p style ={{color:"white"}} onClick={handleClick} className="forgot-password text-right">
                  Need an account ?{" "}Register </p>

                {/* <div> <p>Need an account ? Register</p></div> */}

                {flag && (
                  <Alert color="primary" variant="warning">
                    Fill enter correct email and password
                  </Alert>
                )}
              </form>
            ) : (
              <Home />
            )}
         
    </div>
  );
}

export default Login;
