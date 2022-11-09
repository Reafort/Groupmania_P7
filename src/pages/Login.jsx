import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const user = {
        email: "",
        password: "",
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log("test")

        fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        
        navigate("/profile");
        //TODO put userid and token in local storage

    }
    function onChange(e) {
        user.name = e.target.value
        console.log(user)

    }

    return (
        <div className='forms'>
            <form className='form-inner' onSubmit={handleSubmit}>
                <div className='form-header'>Member Login</div>


                <div className="label-input">
                    <label>Email:</label>
                    <input type="text" className='form-input' placeholder='Email' onChange={onChange}  />
                </div>

                <div className="label-input">
                    <label>Password:</label>
                    <input type="text" className='form-input' placeholder='Password'onChange={onChange}  />
                </div>

                <div className="submit-form-button">
                    <button className="form-button" type='submit'>Log in</button>
                </div>

            </form>

        </div>
    )
}

export default Login;