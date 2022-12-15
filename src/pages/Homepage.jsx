import React from "react";
import { Fragment } from "react";
import UserHeader from '../components/UserHeader';
import { checkIfUserLoggedIn } from '../App'
const Homepage = () => {

    const post = {
        message: "",
        userId: "",
        imageUrl: "",
    }
    let data;
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target)
        let formData = new FormData()
        formData.append('post', JSON.stringify(post))
        formData.append('file', data)
        //TODO fetch API use the URL from thunderclient 
        fetch('http://localhost:3001/api/post/', {
            method: "POST",
            body: formData,
        }).catch(err => {
            console.log(err)
        })
    }

    function onChangePost(e) {
        post.message = e.target.value
        console.log(post)
    }
    function handleFileChange(e) {
        console.log('hello')
        data = e.target.files[0]
        post.imageUrl = URL.createObjectURL(e.target.files[0])
        console.log(post.imageUrl)

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
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder="Share your thoughts with Groupmania.." onChange={onChangePost} >
                        </textarea>
                        <div className="extras">
                            <span>Add to your post:</span>
                            <input type='file' name='file' onChange={handleFileChange}></input>
                        </div>
                        <button className="post" type="submit">Post</button>
                    </form>
                </div>

                <div className="display-post">
                </div>
            </div>

        </Fragment>
    )
}
export default Homepage;