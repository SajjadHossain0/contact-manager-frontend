import React from 'react';
import {Link} from "@mui/joy";
import ContactCard from "./ContactCard";
import {Col, Container, Row} from "reactstrap";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AllContacts() {
    return (
        <div>
            <div className="container" align="right" style={{margin: 10, position: "relative"}}>
                    <Button variant="contained" href="/add-new-contact">
                        <AddIcon/> Add new contact
                    </Button>
            </div>
            <Container className="mt-5">
                <Row>
                    {[...Array(12)].map((_, index) => (
                        <Col key={index} lg="3" md="4" sm="6" xs="12" className="mb-4">
                            <Link href="/contact-details" style={{textDecoration: 'none', color: "black"}}>
                                <ContactCard
                                    image="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459228707_2116824118713888_4717607413967779237_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gghhbe1KpkkQ7kNvgEYiYKY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AkdMC1YakkN9cdsDRCEqLVv&oh=00_AYAPm8_F6iDClmMVWyqBzQZK4bKJUHWCAs5vzRPEtkwaKw&oe=672676D2"
                                    name="Md. Sajjad Hosaain"
                                    email="sajjad@gmail.com"
                                    phone="01738082631"
                                    home="102/1 basabo, Dhaka-1214"
                                    relation="me"
                                    birthday="21, sept"/>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}