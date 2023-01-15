import React, { useState } from "react";
import { Fragment } from "react";
import UserHeader from '../components/UserHeader';
import { checkIfUserLoggedIn } from '../App'
import { useNavigate } from 'react-router-dom';



const Homepage = () => {
    const navigate = useNavigate();
    const [postRead, setPostRead] = useState(false)
    const [posts, setPosts] = useState(null)
    const { userId, token } = JSON.parse(localStorage.getItem('authorizedUser'));

    const post = {
        message: "",
        userId
    }
    let file;
    function handleSubmit(e) {

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
            .then(
                res => {
                    navigate("/homepage")
                }
            )
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
    if (!posts) {
        fetch('http://localhost:3001/api/posts/', {
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        }).then(data => data.json())
            .then(posts => { setPosts(posts) }
            ).catch(error =>
                console.log(error.message || error)
            )
    }

    function refreshPage() {
        console.log('refresh')
        window.location.reload(false)
    }



    function handleReadChange(e) {
        const postId = e.target.value
        setPostRead(e.target.checked)
        const payload = { userId }
        const postJson = JSON.stringify(payload)
        const data = {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: postJson
        }
        fetch(`http://localhost:3001/api/posts/${postId}`, data)
            .then((res) => {
                if (res.ok) {
                    console.log("Read sucessful!");
                } else {
                    console.log('Read unsucessful');
                }
            }).catch(err => {
                console.log(err)
            })
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
                            <input type='file' onChange={handleFileChange} />
                        </div>
                        <button className="post" onClick={refreshPage} type="submit">Post</button>
                    </form>
                </div>

                <div className="display-post" id="displayPosts">
                    {posts && posts.map(post => (
                        <div className="readAndPost" key={post.id}>
                            <label className="readCheckBox">
                                <input type="checkbox" checked={postRead} id={post.id} onChange={handleReadChange} value={post.id} />
                                Read
                            </label>
                            <div>
                                {post.message}
                                {post.file}
                            </div>

                        </div>

                    ))}
                </div>
            </div>

        </Fragment>
    )
}
export default Homepage;