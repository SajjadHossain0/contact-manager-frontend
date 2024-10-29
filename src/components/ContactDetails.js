import React, {useState} from 'react';
import {Card, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {MdOutlineWork} from "react-icons/md";
import {FaBirthdayCake, FaHome, FaLink, FaPhoneAlt} from "react-icons/fa";
import {Button} from "@mui/material";

export default function ContactDetails({image, name, phone, email, home, work, birthday, social, relation}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        home: '',
        birthday: '',
        link: '',
        relation: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add form submission logic here
    };

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
                                        <img
                                            style={{margin: 5}}
                                            className="rounded-circle img-fluid profile-img"
                                            alt="Profile"
                                            src={image}
                                            height="150px"
                                            width="150px"
                                        />
                                        <div className="profile-text">
                                            <h5><strong>{name}</strong></h5>
                                        </div>
                                        <hr></hr>
                                        <div align="left" className="profile-contact">

                                            <div style={{fontSize: 20}}>
                                                <FaPhoneAlt/> {phone}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <MdOutlineWork/> {work}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <FaHome/> {home}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <FaBirthdayCake/> {birthday}
                                            </div>
                                            <div style={{fontSize: 20}}>
                                                <FaLink/> <a href={social} target="_blank">{social}</a>
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
                                    <Form onSubmit={handleSubmit}>
                                        <FormGroup>
                                            <Label for="name">Name</Label>
                                            <Input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter full name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="example@domain.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="phone">Phone</Label>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                placeholder="Enter phone number"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="work">Work</Label>
                                            <Input
                                                type="text"
                                                name="work"
                                                id="work"
                                                placeholder="Enter workplace"
                                                value={formData.work}
                                                onChange={handleInputChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="home">Home</Label>
                                            <Input
                                                type="text"
                                                name="home"
                                                id="home"
                                                placeholder="Enter home address"
                                                value={formData.home}
                                                onChange={handleInputChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="birthday">Birthday</Label>
                                            <Input
                                                type="date"
                                                name="birthday"
                                                id="birthday"
                                                value={formData.birthday}
                                                onChange={handleInputChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="link">Link</Label>
                                            <Input
                                                type="url"
                                                name="link"
                                                id="link"
                                                placeholder="Profile or social media link"
                                                value={formData.link}
                                                onChange={handleInputChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="relation">Relation</Label>
                                            <Input
                                                type="text"
                                                name="relation"
                                                id="relation"
                                                placeholder="Enter relation (e.g., friend, family)"
                                                value={formData.relation}
                                                onChange={handleInputChange}
                                            />
                                        </FormGroup>
                                        <Button color="primary" type="submit">Edit</Button>
                                    </Form>
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