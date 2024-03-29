import React from "react";
import { Fragment } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import picture from '../assets/picture.png'
import { useNavigate } from 'react-router-dom';
import { checkIfUserLoggedIn } from '../App'
import UserHeader from "../components/UserHeader";



const Profile = () => {
    let navigate = useNavigate();
    function deleteUserAccount() {
        console.log('deleting..');
        const { userId, token } = JSON.parse(localStorage.getItem('authorizedUser'));
        console.log("ERROR");
        // eslint-disable-next-line
        fetch(`http://localhost:3001/api/users/${userId}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        }).then((res) => {
            if (res.ok) {
                console.log("Delete sucessful!");
            } else {
                console.log('Delete request unsucessful');
            }
            localStorage.clear(userId)
            navigate("/");
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <Fragment>
            {checkIfUserLoggedIn() && <UserHeader />}
            {checkIfUserLoggedIn() &&
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
                                <button className="delete-account" onClick={deleteUserAccount}>
                                    <span>Delete Account</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default Profile


