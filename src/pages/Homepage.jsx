import React from 'react';
import icon from '../assets/icon.png'
import {Link} from 'react-dom'


const Homepage = () => {
    return(
        <home>
            <div className='welcome-page'>
          <div className='welcome-logo'>
            <img src= {icon} alt="Groupmania Icon"/>
          </div>

        <div className='welcome-message'>
            Welcome to Groupmania
        </div>
        <div className="buttons">
            <button Link to="/Login">Login</button>
            <button Link to="/Signup">Signup</button>           
        </div>
        </div>
        </home>
    

    );
}


export default Homepage;