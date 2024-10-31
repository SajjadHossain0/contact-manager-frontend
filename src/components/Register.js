import React from 'react';
import {Card} from "reactstrap";
import {Button} from "@mui/material";
import axios from "axios";
import {Bounce, toast, ToastContainer} from "react-toastify";
import BASE_URL from "../CallAPI";
import {useNavigate} from "react-router-dom";

export default function Register() {
    /*const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:8080/api/auth/register", {email, password});
            alert(response.data.message);
            <AllContacts/>
        } catch (error) {
            console.log(error);
            alert(error.message);
        }

    }*/

    const navigate = useNavigate();
    const [register, setRegister] = React.useState([]);

    const postRegisterData = (data) => {
        axios.post(`${BASE_URL}/api/auth/register`, data)
            .then(response => {
                    console.log(response)
                    setTimeout(() =>{
                        navigate("/login")
                    });
                },
                (error) => {
                    console.log(error)
                });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(register);
        postRegisterData(register)

    }

    return (
        <div className="container">
            <Card>
                <form onSubmit={handleRegister}>
                    <h3>Register</h3>
                    <input type="text"
                           name="name"
                           onChange={(e) => setRegister({...register, name: e.target.value})}
                           placeholder="Enter full name"
                           required={true}
                    />
                    <input type="email"
                           name="email"
                           onChange={(e) => setRegister({...register, email: e.target.value})}
                           placeholder="Enter email"
                           required={true}
                    />
                    <input type="password"
                           name="password"
                           onChange={(e) => setRegister({ ...register, password: e.target.value })}
                           placeholder="Enter password"
                           required={true}
                    />
                    <Button color="primary" type="submit">Register</Button>
                </form>
            </Card>

            <ToastContainer/>
        </div>
    );
}