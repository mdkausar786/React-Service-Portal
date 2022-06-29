import React, { useState,Suspense,lazy } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registeration from './Components/Registeration';
import Login from './Components/Login';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './Components/Team';
import Services from './Components/Services';
import Navglobal from './Components/Navglobal';
// import Regvalid from './Components/Regvalid';
import NavbarLayout from './Components/NavbarLayout';
import  NotFoundPage  from './Components/NotFoundPage';
import Footer from './Components/Footer';
import ProtectedRoute from './Components/ProtectedRoute';
// import Products from './Components/Products';

import Producttable from './Components/Producttable';
import Demoproducts from './Components/Demoproducts';
import ProductSearch from './Components/ProductSearch';

const Products = lazy(()=>import('./Components/Products'))




function App() {
  const [hidelogin,setHidelogin] =useState(" ");

  // const [home,setHome] = Login(true)



  return (
    


    <>

<Router>

      <div className="App">
        
        <Routes>

            <Route element={<NavbarLayout/>}>
            {/* <ProtectedRoute path="/home" element={<Home/>} auth={Home}/> */}
            <Route path="/home" element={<ProtectedRoute Cmp={Home} />}></Route>
            
        

            <Route path="/team" element={<ProtectedRoute Cmp={Team} />}></Route>

            
            <Route path="/products" element={ <Suspense fallback={<div>please wait product comp loading...</div>}> <ProtectedRoute Cmp={Products} /> </Suspense>}></Route>
           {/* <Route path="/products" element={<ProtectedRoute Cmp={Products} />}></Route> */}

            
            <Route path="/Services" element={<ProtectedRoute Cmp={Services} />}></Route>



                        {/* <Route path="/team" element={<Team/>} />
                        <Route path="/products" element={<Products/>} />
                        <Route path="/Services" element={<Services/>} /> */}




            


          </Route>


          <Route path="/login" element={<Login/>} />
          <Route index element={<LandingPage/>} />
           <Route path="/Register" element={<Registeration/>} />
           <Route path="*" element={<NotFoundPage />}  />
           <Route path="/producttable" element={<Producttable />}  />

           <Route path="/productsearch" element={<ProductSearch />}  />

           

           




        </Routes>
      </div>

    </Router>


















     
       {/* <Router>
         
        <Navglobal />

        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Registeration/>} />
            <Route path="/home" element={<Home/>} />


            <Route path="/services" element={<Services/>} />
          </Routes>
        </div>

      </Router> */}
    </>
  );
}
export default App;

  //   <Router>
  //     <div>
  //       <Navglobal />

  //       <Routes>
  //         <Route exact path="/" element={<LandingPage />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Registeration />} />
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/team" element={<Team />} />
  //         <Route path="/services" element={<Services />} />


  //       </Routes>

  //     </div>
  //   </Router>
  // );


