import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Footer.css'

 const Footer = () => {
  return (
    
    
   
    
    <div>
        <div className="footer-dark" style={{marginTop:'-1rem'}}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to ='/services'>Service</Link> </li>
                                
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                
                                <li><Link to ='/team'>Team</Link> </li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Service Portal</h3>
                            <p>Deliver mobile-friendly, self-service experiences to your customers and employees with an easy-to-use portal framework.</p>
                        </div>
                        <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p className="copyright">Company Name © 2018</p>
                </div>
            </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
    
    
    
  )
}
export default Footer





