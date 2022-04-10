import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <label for="email">Email
                    </label>
                    <input type="email" name="email" id="" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
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