import React from 'react';

const Login = () => {
    return (
        <div className='forms'>
            <div className='form-inner'>
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

            </div>

        </div>
    )
}

export default Login;