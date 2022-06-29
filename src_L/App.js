import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registeration from './Components/Registeration';
import Login from './Components/Login';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Team from './Components/Team';
import Services from './Components/Services'
import Navglobal from './Components/Navglobal'
// import Regvalid from './Components/Regvalid';


function App() {


<>
  <Router>
  <Navglobal />

  <div className="App">
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/services" component={Services} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registeration} />

    </Routes>
  </div>
</Router>
</>

  

    // <Router>
    //   <div>
    //     <Navglobal />

    //     <Routes>
    //       <Route exact path="/" element={<LandingPage />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Registeration />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/team" element={<Team />} />
    //       <Route path="/services" element={<Services />} />


    //     </Routes>

    //   </div>
    // </Router>
  
}

export default App;