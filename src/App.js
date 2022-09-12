import './components/app.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react";



  function App() {

  return (
    <div className="App"> 
      <Router>
       <Homepage />
       <Routes>
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       </Routes>
      </Router>
      
        </div>
    
  );
}

export default App;
