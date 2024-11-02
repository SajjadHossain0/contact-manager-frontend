import React, {useEffect, useState} from 'react';
import {Card, Container, Form, FormGroup, Input, Label, Button} from "reactstrap";
import {MdOutlineWork} from "react-icons/md";
import {FaLink, FaPhoneAlt} from "react-icons/fa";
import {useParams} from "react-router-dom";
import CallAPI from "../CallAPI";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import CakeIcon from "@mui/icons-material/Cake";

export default function ContactDetails({image, name, phone, email, home, work, birthday, social, relation}) {
    const { id } = useParams(); // Get the contact ID from the URL
    const userId = localStorage.getItem("userId"); // Get the user ID from local storage
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        work: '',
        home: '',
        birthday: '',
        sociallink: '',
        relationship: ''
    });

    const [contact, setContact] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const fetchedContact = await CallAPI.getContactById(id);
                setContact(fetchedContact);
                // Populate formData with fetched contact details
                setFormData({
                    name: fetchedContact.name,
                    email: fetchedContact.email,
                    number: fetchedContact.number,
                    work: fetchedContact.work,
                    home: fetchedContact.home,
                    birthday: fetchedContact.birthday,
                    sociallink: fetchedContact.sociallink,
                    relationship: fetchedContact.relationship
                });


            } catch (err) {
                console.error("Error fetching contact details:", err.message);
                setError("Could not load contact details. Please try again later.");
            }
        };

        fetchContact();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedContact = await CallAPI.updateContact(userId, id, formData);
            console.log('Contact updated:', updatedContact);
            window.location.reload()
        } catch (error) {
            console.error("Error updating contact:", error.message);
            setError("Failed to update contact. Please try again later.");
        }
    };

    const handleDelete = async () => {
        try {
            await CallAPI.deleteContact(id);
            console.log("Contact deleted successfully");
            // Redirect or update UI after successful deletion
            window.location.href = "/all-contacts"; // Redirect to contacts list or update state as needed
        } catch (error) {
            console.error("Error deleting contact:", error.message);
            setError("Failed to delete contact. Please try again later.");
        }
    };


    if (error) {
        return <p>{error}</p>;
    }

    if (!contact) {
        return <p>Loading...</p>;
    }

    return (
        <div id="home" className="container home-container">
            <div className="row">

                <div style={{marginBottom: 5}} className="col-md-4">
                    {/*contact details*/}
                    <div>
                        <div>
                            <Card>
                                <div style={{padding: 5}} className="profile">
                                    <div align="center" className="container">
                                        <div className="profile-text">
                                            <h2>{contact.name}</h2>
                                        </div>
                                        <hr></hr>
                                        <div align="left" className="profile-contact">

                                            <div style={{fontSize: 20}}>
                                                <HomeIcon/> {contact.home}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <FaPhoneAlt/> {contact.number}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <GroupIcon/> {contact.relationship}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <MdOutlineWork/> {contact.work}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <CakeIcon/> {contact.birthday}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <FaLink/> <a href={contact.sociallink}
                                                             target="_blank">{contact.sociallink}</a>
                                            </div>

                                            <div align="center" style={{marginTop:10}}>
                                                <Button color="danger" onClick={handleDelete}>Delete</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <Card>
                        <div className="main">
                            {/*edit field*/}
                            <div className="container">
                                <Container className="mt-5">
                                    <h2>Contact Form</h2>
                                    <div align="left">
                                        <Form onSubmit={handleSubmit}>
                                            {error && <p style={{color: "red"}}>{error}</p>}

                                            <FormGroup>
                                                <Label for="name">Full Name</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter full name..."
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="number">Number</Label>
                                                <Input
                                                    id="number"
                                                    name="number"
                                                    value={formData.number}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter number..."
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="work">Work</Label>
                                                <Input
                                                    id="work"
                                                    name="work"
                                                    value={formData.work}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter work..."
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="home">Home</Label>
                                                <Input
                                                    id="home"
                                                    name="home"
                                                    value={formData.home}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter home..."
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="birthday">Birthday</Label>
                                                <Input
                                                    id="birthday"
                                                    name="birthday"
                                                    value={formData.birthday}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Birthday (dd/mm/yyyy)..."
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="socialLink">Social Link</Label>
                                                <Input
                                                    id="socialLink"
                                                    name="sociallink"
                                                    value={formData.sociallink}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Social Link..."
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="relationship">Relationship</Label>
                                                <Input
                                                    id="relationship"
                                                    name="relationship"
                                                    value={formData.relationship}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Relationship..."
                                                    type="text"
                                                />
                                            </FormGroup>

                                            <div align="center">
                                                <Button type="submit" className="primary">Edit Contact</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </div>

        /*
                <div>
                    <div>
                        <Card>
                            <div style={{padding: 5}} className="profile">
                                <div align="center" className="container">
                                    <img
                                        style={{margin: 5}}
                                        className="rounded-circle img-fluid profile-img"
                                        alt="Profile"
                                        src={image}   // Ensure square dimensions for source
                                    />
                                    <div className="profile-text">
                                        <h5><strong>{name}</strong></h5>
                                        <p>{phone}</p>
                                    </div>
                                    <hr></hr>
                                    <div align="left" className="profile-contact">

                                        <div style={{fontSize: 25}}>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Card>
                    </div>

                </div>
        */
    )
}