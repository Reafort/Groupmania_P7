import React from 'react';
import icon from '../assets/icon.png'
import { link } from 'react-router-dom'


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
            <button link ="/login">Login</button>
            <button link ="/signup">Signup</button>           
        </div>
        </div>
        </div>
    

    );
}


export default Homepage;