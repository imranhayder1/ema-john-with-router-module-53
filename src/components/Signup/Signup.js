import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmpassword = event => {
        setConfirmpassword(event.target.value);
    }
    const handleFrom = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleFrom}>
                    <label for="email">Email
                    </label>
                    <input onBlur={handleEmail} type="email" name="email" id="" required />
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="" required />
                    <label htmlFor="password">confirm-password</label>
                    <input onBlur={handleConfirmpassword} type="password" name="password" id="" required />
                    <div className='submit-btn'>
                        <input type="submit" value="Sign Up" />
                    </div>
                    <div className='link'>
                        <p>Already Have An Account? <Link className='form-link' to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;