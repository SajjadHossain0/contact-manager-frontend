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
import CallAPI from "../CallAPI";
import AddNewContact from "./AddNewContact";

export default function Home() {

    const isAuthenticated = CallAPI.isAuthenticated();

    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>

                {/*non authenticate user*/}
                {!isAuthenticated && (
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                    </Routes>
                )}


                {/*if authenticated*/}
                {isAuthenticated && (
                    <Routes>
                        <Route path="/all-contacts" element={<AllContacts/>}/>
                    </Routes>
                )}

                {isAuthenticated && (
                    <Routes>
                        <Route path="/add-new-contact" element={<AddNewContact />}/>
                    </Routes>
                )}


                {/*if authenticated*/}
                {isAuthenticated && (
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
                )}



            </BrowserRouter>

        </div>
    )
}