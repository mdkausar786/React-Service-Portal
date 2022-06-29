import React, { useState, useEffect } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";




function Registration() {

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);





const postData ={name,email,password,phone};
// console.log(postData);

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

    axios.post("https://jsonplaceholder.typicode.com/posts",postData )
      .then((response) => {
        console.log(response);
      })

    setLogin(!login);



    // console.warn(name,email,password,phone);
    let userdata ={name,email,password,phone};
  fetch("http://localhost:3000/registeruser",{

          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(userdata)

        }).then((result)=>{
          console.warn("result",result);
        })
    // }  
  }

  // function saveUser()
  // {
  //   console.warn(name,email,password,phone);
    // let userdata ={name,email,password,phone};
  // fetch("http://localhost:3000/registeruser",{

  //         method:'POST',
  //         headers:{
  //           'Accept':'application/json',
  //           'Content-Type':'application/json'
  //         },
  //         body:JSON.stringify(postData)

  //       }).then((result)=>{
  //         console.warn("result",result);
  //       })
// }


  function handleClick() {
    setLogin(!login);
  }
  // const navigate = useNavigate();
  // useEffect(() => {

  //   if(localStorage.getItem("userPassword")){

  //     navigate('./login')

  //   }

  // }, [])


  return (
    <>
      <Header />
      <div   >

        {login ? (
          // <form onSubmit={handleFormSubmit}>
          <div className="container" onSubmit={handleSubmit(onSubmit)} >


            <div className="row">
              <div className="col-4 offset-4 mt-2" style={{ background: '#25b9e5' }}>
                <h3>Register</h3>
                <form>

                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name"
                      {...register("name", { required: "Name required" })}
                      onChange={(event) => setName(event.target.value)}
                    />


                    <p style={{ color: 'red' }}>{errors.name?.message}</p>

                  </div>
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



                  <button type="submit" className="btn btn-primary btn-lg btn-block " 
                  // onClick={saveUser()}
                  >
                    Register
                  </button>
                  <Link to="/login">
                    <p onClick={handleClick} className="forgot-password text-right">
                      Already registered{" "}log in?</p>


                  </Link>

                  {flag && (
                    <Alert color="primary" variant="danger">
                      every Field is important!
                    </Alert>
                  )}
                </form>
              </div>
            </div>
          </div>

        ) : (

          <Navigate to="/login" element={<Login />} />
        )}
      </div>

    </>
  );
}

export default Registration;


