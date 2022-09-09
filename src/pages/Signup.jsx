import React from 'react';

const Signup = () => {
    return (
        <div className='forms'>
            <div className='form-inner'>
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

            </div>

        </div>
    )
}

export default Signup;