import React, { useState } from 'react';
import {Card, Form, FormGroup, Label, Button, Input} from "reactstrap";
import { useNavigate } from "react-router-dom";
import CallAPI from "../CallAPI";
import {Link} from "@mui/joy";

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
        <div align="center" className="container">
            <Card className="shadow container">
                <h4>Register</h4>

                {error &&
                    <p style={{backgroundColor:"red",padding:10}}>{error}</p>
                }

                <div align="left">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">
                                Full Name
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter full name"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">
                                Email
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="work">
                                Password
                            </Label>
                            <Input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                required
                            />
                        </FormGroup>

                        <div align="center">
                            <Button color="primary">Add Contact</Button>
                        </div>
                    </Form>

                    <div align="center" style={{ marginTop: "10px" }}>
                        <p>Already have an account? <Link href="/login">Sign In</Link></p>
                    </div>
                </div>
            </Card>
        </div>
        /*<div className="container">
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
        </div>*/
    );
}
