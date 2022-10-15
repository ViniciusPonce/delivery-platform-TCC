import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../src/routes.jsx'

import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
