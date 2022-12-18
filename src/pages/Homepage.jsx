 import React, { useState } from "react";
import { Fragment } from "react";
import UserHeader from '../components/UserHeader';
import { checkIfUserLoggedIn } from '../App'


const Homepage = () => {
    const [postRead, setRead] = useState(true);
    const post = {
        message: "",
        userId: JSON.parse(localStorage.getItem('authorizedUser')).userId
    }
    let file;
    function handleSubmit(e) {
        e.preventDefault()

        const postJson = JSON.stringify(post)
        let data;

        if (file) {
            const formData = new FormData()
            formData.append('post', postJson)
            formData.append('file', file)
            data = {
                method: "POST",
                body: formData,
            }
        } else {
            data = {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: postJson
            }
        }
        fetch('http://localhost:3001/api/posts/', data)
            .catch(err => {
                console.log(err)
            })

    }
    function onChangePost(e) {
        post.message = e.target.value
        console.log(post)
    }
    function handleFileChange(e) {
        file = e.target.files[0]
    }

    /*Displaying user's posts */

    fetch('http://localhost:3001/api/posts/')
        .then(data => data.json())
        .then(posts => { 
            console.log(posts)
             //TODO
         })
        
        function handleReadChange(e) {
             setRead(e.target.checked)
         }

    return (
        <Fragment>
            {checkIfUserLoggedIn() && <UserHeader />}
            <div className="homepage-content" id="post-message">
                <div className="user-name">
                    <h1>NAME</h1> {''}
                </div>
                <div className="user-share-status">
                    <div className="share-and-social">
                        <span className="share">Share your thoughts:</span>
                    </div>
                    <form onSubmit={handleSubmit} id="getData">
                        <textarea placeholder="Share your thoughts with Groupmania.." id="posts" onChange={onChangePost} >
                        </textarea>
                        <div className="extras">
                            <span>Add to your post:</span>
                            <input type='file' onChange={handleFileChange}></input>
                        </div>
                        <button className="post" type="submit">Post</button>
                    </form>
                </div>

                <div className="display-post" id="isplayPosts">
                 <label>
                    <input type="checkbox" checked= {postRead} onChange= {handleReadChange}/>
                    Read
                 </label>
                 <p> You {postRead ? 'read' : 'did not read'} this.</p> 
                    
                     {/* {post.map(post => (
                        <div key = {post.id}>{post.message} </div>
                    ))}  */}
                </div>
            </div>

        </Fragment>
    )
}
export default Homepage;