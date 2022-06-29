import React from 'react'
import { Link } from 'react-router-dom'

 const NotFoundPage = () => {
  return (
    <div style={{backgroundColor:'white'}}>
        < h1 style={{textAlign:'center',color:'red'}}>404 </h1>
        < h1 style={{textAlign:'center',color:'red'}}> Page Not Found</h1>
 
        <div style={{textAlign:'center'}} >
        <Link to ="/">Go to Home</Link>
        </div>
    </div>
  )
}

export default NotFoundPage;