import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import picture from '../assets/picture.png'



const Profile = () => {
    function deleteUserAccount() {
        console.log('deleting..');
        //Fetch delete api
        fetch('http://localhost:3001/api/users/:id', {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            if (res.ok) {
                console.log("Delete successful!");
            } else {
                console.log("Delete request unsuccessful");
            }
        }).then(data => {

            const getid = {
                value: 'id'
            }
            localStorage.setItem('id', JSON.stringify(getid))
            JSON.parse(localStorage.getItem('id'))

            //TODO get user id from local storage
        }).catch(err => {
            alert(err.message)
        })
    }
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
                        <button className="delete-account" onClick={deleteUserAccount}>
                            <span>Delete Account</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile


