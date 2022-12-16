import React from "react";
import { Fragment } from "react";
import UserHeader from '../components/UserHeader';
import { checkIfUserLoggedIn } from '../App'



const Homepage = () => {
    const post = JSON.parse(localStorage.getItem('userId'));

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
        fetch('http://localhost:3001/api/post/', data)
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
    // const userPost = document.getElementById('words');
    // const submitBtn = document.getElementById('submitBtn');
    // const outPut = document.getElementById('displayPosts');

    // function commentBox() {
    //     outPut.innerHTML = userPost.value
    // }
    // submitBtn.addEventListener('click', commentBox)
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
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder="Share your thoughts with Groupmania.." id="words" onChange={onChangePost} >
                        </textarea>
                        <div className="extras">
                            <span>Add to your post:</span>
                            <input type='file' onChange={handleFileChange}></input>
                        </div>
                        <button className="post" type="submit" id="submitBtn">Post</button>
                    </form>
                </div>

                <div className="display-post" id="displayPosts">
                </div>
            </div>

        </Fragment>
    )
}
export default Homepage;