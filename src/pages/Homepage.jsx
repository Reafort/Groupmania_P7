import React from "react";
// import UserHeader from '../components/UserHeader';



const Homepage = () => {

    // {checkIfUserLoggedIn() &&
    //     <UserHeader />
    //   }
    
    return (

        <div className="homepage-content" id="post-message">
            <div className="user-name">
                <h1>NAME</h1> </div>
            <div className="user-share-status">
                < div className="share-and-social">
                    <span className="share">Share your thoughts:</span>
                </div>

                <form action="#">
                    <textarea placeholder="Share your thoughts with Groupmania..">
                    </textarea>
                    <div className="extras">
                        <span>Add to your post:</span>
                        <div className="upload-image">
                            <input type="file" id="upload-btn" />
                        </div>
                    </div>
                </form>
                <button className="post">Post</button>
            </div>
        </div>
    )
}

// function checkIfUserLoggedIn() {

//     const userInfo = localStorage.getItem('authorizedUser');
//     if (userInfo != null) {
//       console.log("user is logged in");
//     } else {
//       console.log("user is not logged in")
//     }
//     //NOTE check if token is not expired (low priority)
//     console.log(userInfo)
//     return userInfo
//   }

export default Homepage