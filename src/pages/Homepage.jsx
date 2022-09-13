import React from 'react';
import icon from '../assets/icon.png'
import { Link } from 'react-router-dom'


const Homepage = () => {
    return(
        <div>
            <div className='welcome-page'>
          <div className='welcome-logo'>
            <img src= {icon} alt="Groupmania Icon"/>
          </div>

        <div className='welcome-message'>
            Welcome to Groupmania
        </div>
        <div className="buttons">
            <button><Link to ="/login">Login</Link></button>
            <button><Link to="/signup">Signup</Link></button>           
        </div>
        </div>
        </div>
    

    );
}


export default Homepage;