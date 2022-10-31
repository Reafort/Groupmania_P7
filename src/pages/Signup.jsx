import React from 'react';

const Signup = () => {
    function handleSubmit(e) {
        e.preventDefault();

        console.log("test")

        fetch('http://localhost:3001/api/users/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    name: "",
                    email: "",
                    password: "",
                }
            )
        })
        //TODO getting new user info from the form
        //TODO fetch info POST http://localhost:3001/api/users/signup
        //TODO get rid of the sign up form and show the login page
    }

    return (
        <div className='forms'>
            <form className='form-inner' onSubmit={handleSubmit}>
                <div className='form-header'>Create an account</div>

                <div className="label-input">
                    <label>Fullname:</label>
                    <input type="text" className='form-input' placeholder='Fullname' />
                </div>

                <div className="label-input">
                    <label>Email:</label>
                    <input type="text" className='form-input' placeholder='Email' />
                </div>

                <div className="label-input">
                    <label>Password:</label>
                    <input type="text" className='form-input' placeholder='Password' />
                </div>

                <div className="submit-form-button">
                    <button className="form-button" type='submit'>Sign up</button>
                </div>

            </form>

        </div>
    )
}

export default Signup;