import React from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    let navigate = useNavigate();
    const user = {
        name: "",
        email: "",
        password: "",
    }
    function handleSubmit(e) {
        //TODO validate user input (low priority)
        e.preventDefault();

        console.log("test")

        fetch('http://localhost:3001/api/users/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })     
        navigate("/login");    
    }

    function onChange(e) {
        user.name = e.target.value
        console.log(user)

    }

    return (
        <div className='forms'>
            <form className='form-inner' onSubmit={handleSubmit}>
                <div className='form-header'>Create an account</div>

                <div className="label-input">
                    <label>Fullname:</label>
                    <input type="text" className='form-input' placeholder='Fullname' onChange={onChange} />
                </div>

                <div className="label-input">
                    <label>Email:</label>
                    <input type="text" className='form-input' placeholder='Email' onChange={onChange}  />
                </div>

                <div className="label-input">
                    <label>Password:</label>
                    <input type="text" className='form-input' placeholder='Password' onChange={onChange}  />
                </div>

                <div className="submit-form-button">
                    <button className="form-button" type='submit'>Sign up</button>
                </div>

            </form>

        </div>
    )
}

export default Signup;