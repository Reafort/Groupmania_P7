import React from 'react';
import icon from '../assets/icon.png'
import { Link } from 'react-router-dom'


const Welcomepage = () => {
    const toLoginPage = () => {
        window.location.href = 'http://localhost:3000/login'
    }

    const toSignupPage = () => {
        window.location.href = 'http://localhost:3000/signup'
    }


    return(
        <div>
            <div className='welcome-page'>
          <div className='welcome-logo'>
            <img src= {icon} alt="Groupmania Icon"/>
          </div>

        <div className='welcome-message'>
            Welcome to Groupmania
        </div>
     <ul className="buttons">
     <button className='homepage-buttons'onClick={toLoginPage}>Login</button>
     <button className='homepage-buttons'onClick={toSignupPage}>Signup</button>          
        </ul>
        </div>
        </div>
    );
}


export default Welcomepage;