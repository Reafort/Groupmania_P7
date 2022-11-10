import React from 'react';
import icon from '../assets/icon.png'
import { Link } from 'react-router-dom'


const Welcomepage = () => {
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
            <button className='homepage-buttons'><Link to ='/login'>Login</Link></button>
            <button className='homepage-buttons'><Link to='/signup'>Signup</Link></button>           
        </ul>
        </div>
        </div>
    //TODO onClick separate event handler for each btn

    );
}


export default Welcomepage;