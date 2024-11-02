import React, {useEffect, useState} from 'react';
import { Link } from "@mui/joy";
import ContactCard from "./ContactCard";
import { Col, Container, Row } from "reactstrap";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CallAPI from "../CallAPI";
import {useNavigate} from "react-router-dom";

export default function AllContacts() {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState('');

    // Fetch all contacts for the logged-in user on component mount
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const fetchedContacts = await CallAPI.getAllContacts();
                setContacts(fetchedContacts); // Set fetched contacts to state
            } catch (err) {
                console.error("Error fetching contacts:", err.message);
                setError("Could not load contacts. Please try again later.");
            }
        };

        fetchContacts();
    }, []);

    const handleContactClick = (id) => {
        navigate(`/contact/${id}`); // Navigate to contact details page
    };

    return (
        <div>
            <div className="container" align="right" style={{ margin: 10, position: "relative" }}>
                <Button variant="contained" href="/add-new-contact">
                    <AddIcon /> Add new contact
                </Button>
            </div>
            <Container className="mt-5">
                <Row>
                    {error && <p>{error}</p>}
                    {contacts.map(contact => (
                        <Col lg="3" md="4" sm="6" xs="12" className="mb-4" key={contact.id}>
                            <div onClick={() => handleContactClick(contact.id)} style={{cursor: 'pointer'}}>
                                <ContactCard
                                    name={contact.name}
                                    phone={contact.number}
                                    home={contact.home}
                                    work={contact.work}
                                /></div>
                        </Col>
                        ))}
                </Row>
            </Container>
        </div>
);

}
