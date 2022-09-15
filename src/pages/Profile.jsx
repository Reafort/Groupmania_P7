import React from "react";
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const Profile = () => {
   
    return(
        <div className="profile-content">
            <div className="profile-picture-content">
            <div className="profile-picture">
                <div className="profile-upload">
               <input type="file" />
               </div>

            </div>
            </div>

        <div className="profile-info">
            <div className="about-me">
                <div className="about-me-flex">

                <h1>NAME</h1>

                <div className="profile-user-input">
                <label className="user-job-info">Email:</label>
                <input type="text" className="user-input" placeholder="Email" />
                </div>
                <div className="profile-user-input">
                <label className="user-job-info">Phone:</label>
                <input type="text" className="user-input" placeholder="Phone" />
                </div>
                
                <div className="profile-user-social">
                  <div className="user-social">
                    <div className="social">Social</div>
                 
                    <ul className="user-social-media">
                       <a className="facebook" href="Facebook.com"><FaFacebook/></a>
                       <a className="Linkedin" href="Linkedin.com"><FaLinkedin/></a>
                    </ul>
                   
                  </div>
                </div>
                </div>
    
            </div>

            <div className="user-status">
            <div className="user-share-status">
                <span className="share">Share your thoughts</span>
                <form action="#">
                <textarea placeholder="Share your thoughts with Groupmania.."></textarea>
            </form>
            <button className="post">Post</button>
            </div>

            </div>

        </div>

        </div>
    )
}

export default Profile