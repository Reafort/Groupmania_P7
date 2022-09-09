import './components/app.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Route, Routes } from 'react-dom'


function App() {
  return (
    <div className="App">
      <router>
       <Login />
       <Signup />
      </router>
      
        </div>
    
  );
}

export default App;
