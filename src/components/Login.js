import React from 'react';
import axios from "axios";
import BASE_URL from "../CallAPI";
import {useNavigate} from "react-router-dom";

export default function Login({setAuthToken}) {
    const navigate = useNavigate();
    const [login, setLogin] = React.useState(true);

    const loginRequest = (data) => {
        axios.post(`${BASE_URL}/api/auth/login`, data)
            .then(response => {
                setAuthToken(response.data.token);
                alert(response.data.message);
                setTimeout(() => {
                    navigate("/all-contacts");
                    }
                )
            },
                error => {
                console.log(error)
                })
    }

    const handleLoginRequest = (e) => {
        e.preventDefault();
        console.log(login);
        loginRequest(login)
    }



    return (
        <div className="container">
            <form onSubmit={handleLoginRequest}>
                <h2>Login</h2>
                <input type="email" name="email" onChange={(e) => setLogin({...login, email: e.target.value})} placeholder="Email"
                       required/>
                <input type="password"
                       name="password"
                       onChange={(e) => setLogin({ ...login, password: e.target.value })}
                       placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}