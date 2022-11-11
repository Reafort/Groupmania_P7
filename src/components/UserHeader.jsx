import React from "react";
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'

const UserHeader = () => {
    return (
        <div className="profile-header">
            <div className="profile-logo">
                <img className="user-header-logo" src={logo2} alt="Groupmania-profile-logo" />
            </div>

            <div className="profile-links">
                <ul className="profile-inner-links">
                    <li><Link to="/Homepage">Home</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="/Signout">Signout</Link></li>
                    
                </ul>
            </div>

        </div>
    )
}

//TODO Add signout function

export default UserHeader;