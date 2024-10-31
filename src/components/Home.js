import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import './Home.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AllContacts from "./AllContact";
import ContactDetails from "./ContactDetails";
import Welcome from "./Welcome";
import Register from "./Register";
import Login from "./Login";

export default function Home() {
    const [authToken, setAuthToken] = useState(localStorage.getItem("token") || "");

    const isAuthenticated = !!authToken;

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to={isAuthenticated ? "/all-contacts" : "/login"} />} />
                    <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
                    <Route path="/register" element={<Register />} />
                    {isAuthenticated && (
                        <>
                            <Route path="/all-contacts" element={<AllContacts />} />
                            <Route path="/contact-details" element={
                                <ContactDetails
                                    image="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459228707_2116824118713888_4717607413967779237_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gghhbe1KpkkQ7kNvgEYiYKY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AkdMC1YakkN9cdsDRCEqLVv&oh=00_AYAPm8_F6iDClmMVWyqBzQZK4bKJUHWCAs5vzRPEtkwaKw&oe=672676D2"
                                    name="Sajjad"
                                    phone="01738082631"
                                    work="Software Engineer"
                                    home="Daka, Bangladesh"
                                    birthday="21, sept"
                                    social="https://www.facebook.com/sajjad.hossain.8082"
                                />
                            } />
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </div>
        /*<div>
            <BrowserRouter>

                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>

                {/!*non authenticate user*!/}
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>

                {/!*if authenticated*!/}
                <Routes>
                    <Route path="/all-contacts" element={<AllContacts/>}/>
                </Routes>

                {/!*if authenticated*!/}
                <Routes>
                    <Route path="/contact-details" element={
                        <ContactDetails
                            image="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459228707_2116824118713888_4717607413967779237_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gghhbe1KpkkQ7kNvgEYiYKY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AkdMC1YakkN9cdsDRCEqLVv&oh=00_AYAPm8_F6iDClmMVWyqBzQZK4bKJUHWCAs5vzRPEtkwaKw&oe=672676D2"
                            name="Sajjad"
                            phone="01738082631"
                            work="Software Engineer"
                            home="Daka, Bangladesh"
                            birthday="21, sept"
                            social="https://www.facebook.com/sajjad.hossain.8082"
                        />
                    }/>
                </Routes>


            </BrowserRouter>

        </div>*/
    )
}