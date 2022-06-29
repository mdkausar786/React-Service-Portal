import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import { useForm } from 'react-hook-form';



function Registration() {

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);







  const onSubmit = (data, e) => {
    e.preventDefault();

    // if (!name || !email || !password || !phone ) {
    //   setFlag(true);
    // }
    //  else {
    //   setFlag(false);
    localStorage.setItem("userEmail", JSON.stringify(data.email));
    localStorage.setItem("userPassword", JSON.stringify(data.password));
    console.log("Saved in Local Storage");

    setLogin(!login);
    // }  
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
     <div style={{background:'#25b9e5'}}  >

        {login ? (
          // <form onSubmit={handleFormSubmit}>
          <form className="container"  style={{width:"396px",height:"609px", background:'#e9ecef'}}  onSubmit={handleSubmit(onSubmit)} >

            <h3>Register</h3>

            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Enter Full Name" name="name"
                {...register("name", { required: "Name required" })}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <p style={{ color: 'red' }}>{errors.name?.message}</p>


            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                {...register("email", {
                  required: "Email required", pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />
            </div>
            <p style={{ color: 'red' }}>{errors.email?.message}</p>


            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                // {...register("password", { required: "Password required" ,},
                {...register("password", {
                  required: "Password required", pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

                    // value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,

                    message: "Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters",
                     minLength: {
                      value: 8,
                     message: "Password must have at least 8 characters" 
                     }
                  }
                }


                )}

                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

            {/* <p style={{ color: 'red' }} >{errors.password?.message}</p> */}


            <div className="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="confirm_password"
                {...register("confirm_password", {
                  required: "Please confirm password!",
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    }
                  }
                })}

                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            {errors.confirm_password && <p style={{ color: 'red' }}>{errors.confirm_password.message}</p>}

            {/* <p style={{ color: 'red' }} >{errors.confirmpassword?.message}</p> */}


            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter contact no"
                name="phone"
                {...register("phone", {
                  required: "phone no. required", minLength: {
                    value: 10,
                    message: "Please enter 10 digit Mobile number"
                  }
                })}

                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}

            {/* <p style={{ color: 'red' }} >{errors.phone?.message}</p> */}



            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Register
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered{" "}log in?</p>
            {flag && (
              <Alert color="primary" variant="danger">
                every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>

    </>
  );
}

export default Registration;


