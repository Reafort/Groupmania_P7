import React from "react";



const Homepage = () => {

    return (
        <div className="homepage-content">

            <div className="user-name">
                <h1>NAME</h1> </div>

            <div className="user-share-status">
                < div className="share-and-social">
                    <span className="share">Share your thoughts:</span>
                </div>

                <form action="#">
                    <textarea placeholder="Share your thoughts with Groupmania.."></textarea>
                </form>
                <button className="post">Post</button>
            </div>



        </div>
    )
}

export default Homepage