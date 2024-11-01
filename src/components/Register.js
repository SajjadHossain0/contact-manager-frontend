import React from 'react';
import {Card} from "reactstrap";
import {Button} from "@mui/material";
import axios from "axios";
import {Bounce, toast, ToastContainer} from "react-toastify";
import BASE_URL from "../CallAPI";
import {useNavigate} from "react-router-dom";
import CallAPI from "../CallAPI";
import {Link} from "@mui/joy";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({

    });

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            await CallAPI.register(formData,token);

            setFormData({
                name: '',
                email: '',
                password: ''
            })

            alert("successfully registered")
            navigate('/login')
        }catch(e){
            console.error('Error registering user:', e);
            alert('An error occurred while registering user');
        }
    }
    return (
        <div className="container">
            <Card>
                <form onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    <input type="text"
                           value={formData.name}
                           onChange={handleInputChange}
                           placeholder="Enter full name"
                           required/>
                    <input type="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           placeholder="Enter email"
                           required/>
                    <input type="password"
                           value={formData.password}
                           onChange={handleInputChange}
                           placeholder="Enter password"
                           required/>
                    <Button color="primary" type="submit">Register</Button>
                </form>
                <p>already have acc? <Link href="/login">login</Link></p>
            </Card>

            <ToastContainer/>
        </div>
    );
}