import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import BasicForm from './BasicForm';


const Register = () => {
    const [userRegistration, setuserRegistration] = useState({
        username: "", email: "",phone: "",password: ""});

    // const [allEntry,setAllNewEntry]=useState([]);

    const [records,setRecords]=useState([]);
    
    const handleinput = (e) => {
       const name =e.target.name;
       const value =e.target.value;

    //    const email =e.target.email;
    //    const password =e.target.password;
       

       
       setuserRegistration({...userRegistration,[name]:value})
       

    //    console.log(name,value);
     }

    

     const handleSubmit = (e) =>{
         e.preventDefault();
        // console.log(userRegistration);
        // const {username,email,phone, password}=push(userRegistration);
         const newRecord ={...userRegistration}

        // let vemail =this.records.email;
        // let vpassword =this.records.password;
        // // console.log(vemail,vpassword); 

        // console.log(records.email);


          console.log(records);
          setRecords([...records,newRecord])

         
     }

   


  return (

    <> <div className='Rform'> <h1> Registration Page </h1>
        <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={userRegistration.username} onChange={handleinput} />
        </div>

        <div>
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email"  value={userRegistration.email} onChange={handleinput} />
        </div>

        <div>

            <label htmlFor="phone">phone</label>
            <input type="phone" name="phone" id="phone" value={userRegistration.phone} onChange={handleinput}/>
        </div>

        <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" value={userRegistration.password} onChange={handleinput}/>
        </div>

        <button type="submit">Register</button>
        <p>
            alredy regsiter {" "} login in?
        </p>

        <div>
            {/* <button type="submit" >Login</button> */}
            <Link   to="/form">Login</Link>
        </div>

    </form>
   
    </div>
    </>
  )

}

export default Register