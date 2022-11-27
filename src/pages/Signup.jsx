import React from 'react';
import { useNavigate } from 'react-router-dom';


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
        }).then(res => {
            console.log(res.ok)
            if (res.ok) {
                navigate("/login");
            }
            return res.json();
        }).catch(err => {
            console.log(err)
            alert(err.message)
        })
    }

    function onChangeName(e) {
        user.name = e.target.value
        console.log(user)
    }
    function onChangeEmail(e) {
        user.email = e.target.value
        console.log(user)
    }
    function onChangePassword(e) {
        user.password = e.target.value
        console.log(user)
    }

    return (
        <div className='forms'>
            <form className='form-inner' onSubmit={handleSubmit}>
                <div className='form-header'>Create an account</div>

                <div className="label-input">
                    <label>Fullname:</label>
                    <input type="text" className='form-input' placeholder='Fullname' onChange={onChangeName} />
                </div>

                <div className="label-input">
                    <label>Email:</label>
                    <input type="email" className='form-input' placeholder='Email' onChange={onChangeEmail} />
                </div>

                <div className="label-input">
                    <label>Password:</label>
                    <input type="password" className='form-input' placeholder='Password' onChange={onChangePassword} />
                </div>

                <div className="submit-form-button">
                    <button className="form-button" type='submit'>Sign up</button>
                </div>

            </form>

        </div>
    )
}

export default Signup;