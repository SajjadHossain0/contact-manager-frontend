import React, { useEffect } from 'react';
import { Link } from "@mui/joy";
import ContactCard from "./ContactCard";
import { Col, Container, Row } from "reactstrap";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CallAPI from "../CallAPI";

export default function AllContacts() {
    const [contacts, setContacts] = React.useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contactList = await CallAPI.getContactByUser();
                console.log("Fetched contacts:", contactList); // Log the fetched contacts
                setContacts(contactList); // Set the contacts state
            } catch (error) {
                console.error(error);
            }
        };
        fetchContacts();
    }, []);


    return (
        <div>
            <div className="container" align="right" style={{ margin: 10, position: "relative" }}>
                <Button variant="contained" href="/add-new-contact">
                    <AddIcon /> Add new contact
                </Button>
            </div>
            <Container className="mt-5">
                <Row>
                    {contacts.length > 0 ? (
                        contacts.map((contact) => (
                            <Col key={contact.id} lg="3" md="4" sm="6" xs="12" className="mb-4">
                                <Link href="/contact-details" style={{ textDecoration: 'none', color: "black" }}>
                                    <ContactCard
                                        image="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459228707_2116824118713888_4717607413967779237_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gghhbe1KpkkQ7kNvgEYiYKY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AkdMC1YakkN9cdsDRCEqLVv&oh=00_AYAPm8_F6iDClmMVWyqBzQZK4bKJUHWCAs5vzRPEtkwaKw&oe=672676D2"
                                        name={contact.name}
                                        email={contact.email}
                                        phone={contact.phone}
                                        home={contact.home}
                                        relation={contact.relation}
                                        birthday={contact.birthday}
                                    />
                                </Link>
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p>No contacts found.</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );

}
