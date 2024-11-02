import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import CallAPI from "../CallAPI";
import {Card, Form, FormGroup, Input, Label, Button} from "reactstrap";
import {Link} from "@mui/joy";

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
            setTimeout(() => {
                setError("Something went wrong");
            }, 1000); // 1000 ms = 1 second

        }
    };

    return (
        <div align="center" className="container">
            <Card className="shadow container">
                <h4>Sign In</h4>

                {error &&
                    <p style={{backgroundColor:"red",padding:10}}>{error}</p>
                }

                <div align="left">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email..."
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter number..."
                                type="text"
                            />
                        </FormGroup>

                        <div align="center">
                            <Button color="success">Sign In</Button>
                        </div>
                    </Form>

                    <div align="center" style={{marginTop: "10px"}}>
                        <p>Don't have an account? <Link href="/register">Register Here</Link></p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
