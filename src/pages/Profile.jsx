import React from "react";
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Profile = () => {

    return (
        <div className="profile-content">
            <div className="profile-info">

                <div className="user-name">
                    <h1>NAME</h1> </div>

                <div className="user-share-status">
                    < div className="share-and-social">
                        <span className="share">Share your thoughts:</span>
                        <div className="profile-user-social">
                            <div className="user-social">
                                <ul className="user-social-media">
                                    <a className="facebook" href="Facebook.com"><FaFacebook /></a>
                                    <a className="Linkedin" href="Linkedin.com"><FaLinkedin /></a>
                                </ul> </div>

                        </div>


                    </div>

                    <form action="#">
                        <textarea placeholder="Share your thoughts with Groupmania.."></textarea>
                    </form>
                    <button className="post">Post</button>
                </div>

            </div>

        </div>
    )
}

export default Profile