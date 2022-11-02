import React from 'react';

const Login = () => {
    function handleSubmit(e) {
        e.preventDefault()
        console.log("test")

        fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    email: "",
                    password: "",
                }
            )
        })
        //TODO put userid and token in local storage
        //TODO get rid of the login form and show the profile page
    
    }

    return (
        <div className='forms'>
            <form className='form-inner' onSubmit={handleSubmit}>
                <div className='form-header'>Member Login</div>


                <div className="label-input">
                    <label>Email:</label>
                    <input type="text" className='form-input' placeholder='Email' />
                </div>

                <div className="label-input">
                    <label>Password:</label>
                    <input type="text" className='form-input' placeholder='Password' />
                </div>

                <div className="submit-form-button">
                    <button className="form-button" type='submit'>Log in</button>
                </div>

            </form>

        </div>
    )
}

export default Login;