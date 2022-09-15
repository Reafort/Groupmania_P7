import React from "react";
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import { useState } from "react";

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
                  <div className="user-social">
                    <div className="social">Social</div>
                    <ul className="fb-ig">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Linked</li>
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