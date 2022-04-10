import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleName = event => {
        setName(event.target.value);
    }
    const handleAddress = event => {
        setAddress(event.target.value);
    }
    const handlePhone = event => {
        setPhone(event.target.value);
    }

    const handleShippingFrom = event => {
        event.preventDefault();
        const shipment = { name, email, address, phone };
        console.log(shipment);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping</h2>
                <form onSubmit={handleShippingFrom}>
                    <label for="name">Your Name
                    </label>
                    <input onBlur={handleName} type="text" name="name" id="" required />
                    <label for="email">Email
                    </label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddress} type="text" name="address" id="" required />
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhone} type="text" name="phone" id="" required />

                    <div className='submit-btn'>
                        <input type="submit" value="Add Shipping" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Shipment;