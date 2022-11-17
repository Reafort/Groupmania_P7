import React from "react";
import logo2 from '../assets/logo2.png'
import { Link, useNavigate } from 'react-router-dom'

const UserHeader = () => {
    let navigate = useNavigate();
    const signOutProfile = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div className="profile-header">
            <div className="profile-logo">
                <img className="user-header-logo" src={logo2} alt="Groupmania-profile-logo" />
            </div>

            <div className="profile-links">
                <ul className="profile-inner-links">
                    <li><Link to="/Homepage">Home</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li className="signOut" onClick={signOutProfile}>Signout</li>

                </ul>
            </div>

        </div>
    )
}
export default UserHeader;