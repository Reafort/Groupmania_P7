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

                <h1>Job Details</h1>

                <div className="profile-user-input">
                <label className="user-job-info">Job Title:</label>
                <input type="text" className="user-input" placeholder="Job title" />
                </div>

                <div className="profile-user-input">
                <label className="user-job-info">Position:</label>
                <input type="text" className="user-input" placeholder="Position" />
                </div>
                
                <div className="profile-user-input">
                  <div className="user-social">
                    <div className="social">Social</div>
                    <ul className="fb-ig">
                        <li>Facebook</li>
                        <li>Instagram</li>
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