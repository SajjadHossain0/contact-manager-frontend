import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import CallAPI from "../CallAPI";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = await CallAPI.login(email, password);
            if (token) {
                localStorage.setItem('token', token);
                navigate('/all-contacts');
                window.location.reload();
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Email"
                       required />
                <input type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
