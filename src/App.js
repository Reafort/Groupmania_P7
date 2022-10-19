import './components/app.css';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import UserHeader from './components/UserHeader';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react";



function App() {

  return (
    <div className="App">
      <Router>
        {checkIfUserLoggedIn() &&
          <UserHeader />
        }
        <Homepage />
        <Profile />
        <Footer />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>

  );
}


function checkIfUserLoggedIn() {
  localStorage.setItem('groupmaniaUser', 'test')
  const userInfo = localStorage.getItem('groupmaniaUser');
  console.log('hi')
  console.log(userInfo)
  //TODO check if token is valid
  return userInfo

}



export default App;

