import React, { useState } from 'react';
import { Card } from "reactstrap";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CallAPI from "../CallAPI";
import { Link } from "@mui/joy";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await CallAPI.register(formData);
            alert("Successfully registered!");
            navigate('/login');
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="container">
            <Card>
                <form onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    {error && <p>{error}</p>}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter password"
                        required
                    />
                    <Button color="primary" type="submit">Register</Button>
                </form>
                <p>Already have an account? <Link href="/login">Login</Link></p>
            </Card>
        </div>
    );
}
