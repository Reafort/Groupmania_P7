import React from "react";



const Homepage = () => {
    const post = {
        message: "",
        userId: "",
        imageUrl: "",
    }

    function onChangePost(e) {
        post.message = e.target.value
        console.log(post)
    }
    return (
        <div className="homepage-content" id="post-message">
            <div className="user-name">
                <h1>NAME</h1> </div>
            <div className="user-share-status">
                < div className="share-and-social">
                    <span className="share">Share your thoughts:</span>
                </div>

                <form action="#">
                    <textarea placeholder="Share your thoughts with Groupmania.." onChange={onChangePost} >
                    </textarea>
                    <div className="extras">
                        <span>Add to your post:</span>
                        <div className="upload-image">
                            <input type="file" id="upload-btn" />
                        </div>
                    </div>
                </form>
                <button className="post" type="submit">Post</button>
            </div>
        </div>
    )
}

export default Homepage