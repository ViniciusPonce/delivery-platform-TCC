import './App.css';
import React, {useEffect, useState} from 'react';
import api from "./services/api";
import { BrowserRouter as Router } from 'react-router-dom'
// import Login from './components/login/Login.jsx'
// import LoginTeste from './components/login/LoginTeste.jsx'
// import Home from './pages/home/Home.jsx'
import Routes from '../src/routes.jsx'

// import Navbar from './components/navigationBar/Navbar.jsx';

import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    api.get("/user")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log('App.jsx')

  return (
    // <div className="App">
      // <Navbar>
        // <Router>
        //   <Routes>
          
        //     {/* Rotas para Login */}
        //       <Route path='/home' element={<Home/>} />
        //       <Route path='/register' element={<LoginTeste/>} />

        //     </Routes>
        // </Router>
      // </Navbar>
    // </div>
    <Router>
      <Routes/>
    </Router>
    

  );
}

export default App;
