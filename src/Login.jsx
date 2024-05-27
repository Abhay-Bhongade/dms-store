import axios from 'axios';
import React, { useState } from 'react';
import { config } from './Services';

function LoginForm() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = 
            {
                "mobile_number": 9200000000,
                "password":9200000000
            }
        
        // Handle form submission logic here
        console.log('Mobile Number:', mobileNumber);
        console.log('Password:', password);
const url = "https://dmsapp.tekzee.in/api/distributor/loginV1";
        const res = await axios.post(url,payload,config)
        console.log("res",res);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="mobile-number">Mobile Number:</label>
                    <input 
                        type="text" 
                        id="mobile-number" 
                        value={mobileNumber} 
                        onChange={(e) => setMobileNumber(e.target.value)} 
                        required 
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="text" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <br />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
