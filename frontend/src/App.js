import './App.css';
import React, {useEffect, useState} from 'react';
import api from "./services/api";

import Navbar from './components/Navbar';

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
  console.log(user)

  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
