import React from 'react';
import axios from "axios";
import BASE_URL from "../CallAPI";
import {useNavigate} from "react-router-dom";
import CallAPI from "../CallAPI";

export default function Login({setAuthToken}) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();


    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const userData = await CallAPI.login(email, password);
            if(userData.token){
                localStorage.setItem('token', userData.token);
                localStorage.setItem('role', userData.role);
                navigate('/all-contact')
            }
            else{
                setError(userData.error || 'Unknown error');
            }
        }catch(err){
            console.error(err);
            setError('An error occurred while logging in');
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    }



    return (
        <div className="container">
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Email"
                       required/>
                <input type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value )}
                       placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}