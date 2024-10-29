import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import './Home.css'
import ContactCard from "./ContactCard";
import {Link} from "@mui/joy";

export default function Home() {
    return (

        <div className="container mt-5">

            {/*add button*/}
            <div align="right" style={{margin: 10, position: "relative"}}>

                <Button variant="contained" href="#contained-buttons">
                    <AddIcon/> Add new contact
                </Button>

            </div>

            <div className="row">

                {/*individual card detaild*/}
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="p-4 text-white">
                        <Link href="/contact-details" style={{textDecoration: 'none'}}>
                            <ContactCard
                                image="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459228707_2116824118713888_4717607413967779237_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gghhbe1KpkkQ7kNvgEYiYKY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AkdMC1YakkN9cdsDRCEqLVv&oh=00_AYAPm8_F6iDClmMVWyqBzQZK4bKJUHWCAs5vzRPEtkwaKw&oe=672676D2"
                                name="Md. Sajjad Hosaain"
                                email="sajjad@gmail.com"
                                phone="01738082631"
                                home="102/1 basabo, Dhaka-1214"
                                relation="me"
                                birthday="21, sept"/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}