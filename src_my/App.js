
import './App.css';
import BasicForm from './component/form/BasicForm'
import './component/form/bform.css';
import Register from './component/form/Register'
import './component/form/Register.css'
// import {BrowserRouter} from "react-router-dom";
// import {Route,Switch} from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  return (
    // <div>
    //   <Register/>
      
    // </div>
    
    <Router>
      

      <Routes>
      <Route path="/" element={<Register/>}>    </Route>
        <Route path="/form" element={<BasicForm />}>
      
          </Route>
          
          
      </Routes>
    </Router>
    );
}

export default App;
