import React, { useState } from "react";
import WelcomePage from "./WelcomePage";

const BasicForm = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    
    
    
    const [allEntry,setAllNewEntry] = useState([]);
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    

    // const validateEmail = (email) => {
    //     const re =
    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    //   };

    const submitForm = (e) =>{
        e.preventDefault()

    let mail =allEntry.email;
    let pass = allEntry.password;
        // const newEntry ={email: email, password:password};
        // setAllNewEntry([...allEntry,newEntry]);
        // console.log(allEntry);

        if (!email || !password) {
            setFlag(true);
            console.log("EMPTY");
          } else if (password !== pass || email !== mail) {
            setFlag(true);
          } else {
            // setHome(!Register);
            setFlag(false);
          }

        };

    
    return (
        <><div className='form'><h1>
            Login page
        </h1><form action="" onSubmit={submitForm}>
                
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}  placeholder="email"/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Login</button>
            </form>
            </div></>
            
        
    )
}
export default BasicForm