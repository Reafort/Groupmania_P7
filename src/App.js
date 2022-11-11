import './components/app.css';
import Welcomepage from './pages/Welcomepage';
import Footer from './components/Footer';
import UserHeader from './components/UserHeader';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";



function App() {

  return (
    <div className="App">
      <Router>

        {checkIfUserLoggedIn() &&
          <UserHeader />
        }
        {checkIfUserLoggedIn() &&
          <Profile />
        }

        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>

        <Footer />
      </Router>

    </div>

  );
}


function checkIfUserLoggedIn() {
  const userInfo = localStorage.getItem('authorizedUser');
  //FIXME return true if token in localstorage is valid and not expired
  console.log(userInfo)
  return userInfo

}


export default App;

