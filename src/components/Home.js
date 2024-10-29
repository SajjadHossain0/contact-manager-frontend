import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import './Home.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllContacts from "./AllContact";
import ContactDetails from "./ContactDetails";

export default function Home() {
    return (
        <div>
            <div className="container" align="right"  style={{margin: 10, position: "relative"}}>
                <Button variant="contained" href="#contained-buttons">
                    <AddIcon/> Add new contact
                </Button>
            </div>

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<AllContacts/>}/>
                </Routes>

                <Routes>
                    <Route path="/contact-details" element={
                        <ContactDetails
                            image="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459228707_2116824118713888_4717607413967779237_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gghhbe1KpkkQ7kNvgEYiYKY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AkdMC1YakkN9cdsDRCEqLVv&oh=00_AYAPm8_F6iDClmMVWyqBzQZK4bKJUHWCAs5vzRPEtkwaKw&oe=672676D2"
                            name="Sajjad"
                            phone="01738082631"
                            work="Software Engineer"
                        />
                    }/>
                </Routes>


            </BrowserRouter>

        </div>
    )
}