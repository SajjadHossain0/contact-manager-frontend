import React, {useEffect, useState} from 'react';
import { Link } from "@mui/joy";
import ContactCard from "./ContactCard";
import { Col, Container, Row } from "reactstrap";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CallAPI from "../CallAPI";

export default function AllContacts() {

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
                            <Link href={`/contact-details/${contact.id}`} style={{ textDecoration: 'none', color: "black" }}>
                                <ContactCard
                                    name={contact.name}
                                    phone={contact.number}
                                    home={contact.home}
                                    work={contact.work}
                                    relation={contact.relationship}
                                    birthday={contact.birthday}
                                    image={contact.image || "default-image-url"} // Add default image if not present
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );

}
