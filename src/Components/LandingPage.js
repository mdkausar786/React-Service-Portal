import React from 'react'
import { Link } from 'react-router-dom'

import  lp from '../assets/lp.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center" style={{color:'#6520e4'}}>THE login / register page</h1>
            <p className="main-para text-center"style={{color:'white'}}>join us now!!!</p>
            <div className="a" style={{marginTop:'292px',marginLeft:'27rem'}}>
                <Link to="/login">
                    <button className="btn btn-primary" style={{margin:'1rem',fontSize:'31px'}}>log in</button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-primary" id="reg"  style={{margin:'1rem',fontSize:'31px'}}><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${lp})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}