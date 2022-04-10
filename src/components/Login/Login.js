import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleLoginForm = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log("sign in");
            })
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLoginForm}>
                    <label for="email">Email
                    </label>
                    <input onBlur={handleEmail} type="email" name="email" id="" required />
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="" required />
                    <p style={{ color: "red" }}>{error?.message}</p>
                    <div className='submit-btn'>
                        <input type="submit" value="Submit" />
                    </div>
                    <div className='link'>
                        <p>New To Ema-John? <Link className='form-link' to="/signup">Create New Account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;