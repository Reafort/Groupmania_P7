import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
        }).then(res => res.json()).then(data => {
           
            const authorizedUser = {
                userId: data.userId,
                token: data.token
            }
            localStorage.setItem("authorizedUser", JSON.stringify(authorizedUser))
        }).catch(err => {
            console.log(err)
        })

         
    }
    function onChangeEmail(e) {
        user.email = e.target.value
        console.log(user)
    }
    function onChangePassword(e) {
        user.password = e.target.value
        console.log(user)
    }

    //TODO add navigate to homepage

    return (
        <div className='forms'>
            <form className='form-inner' onSubmit={handleSubmit}>
                <div className='form-header'>Member Login</div>


                <div className="label-input">
                    <label>Email:</label>
                    <input type="text" className='form-input' placeholder='Email' onChange={onChangeEmail} />
                </div>

                <div className="label-input">
                    <label>Password:</label>
                    <input type="text" className='form-input' placeholder='Password' onChange={onChangePassword} />
                </div>

                <div className="submit-form-button">
                    <button className="form-button" type='submit'>Log in</button>
                </div>

            </form>

        </div>
    )
}

export default Login;