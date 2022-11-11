import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import picture from '../assets/picture.png'


const Profile = () => {
    return (
        <div className="user-profile">
            <div className="user-profile-info">
                <div className="profile-photo">
                    <div className="card">
                        <img className="profile-img" src={picture} alt="Jane Doe" />
                    </div>
                </div>
                <div className="user-info-flex">
                    <div className="user-info">
                        <h3>Name</h3>
                        <hr />
                        <p className="profile-email">Email</p>
                        <hr />
                        <div className="social">
                            <a className="facebook" href="Facebook.com"><FaFacebook /></a>
                            <a className="Linkedin" href="Linkedin.com"><FaLinkedin /></a>
                        </div>
                        <hr />
                        <button className="delete-account">
                            <span>Delete Account</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile


