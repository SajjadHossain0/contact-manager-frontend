import React, { useState } from 'react';
import { Card, Form, FormGroup, Input, Label } from "reactstrap";
import { Button } from "@mui/material";
import CallAPI from "../CallAPI";
import {useNavigate} from "react-router-dom";

export default function AddNewContact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        work: '',
        home: '',
        birthday: '',
        sociallink: '',
        relationship: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await CallAPI.addContact(formData);
            alert("Successfully Added!");
            setFormData({
                name: '',
                number: '',
                work: '',
                home: '',
                birthday: '',
                sociallink: '',
                relationship: ''
            });
            navigate("/all-contacts");
        } catch (error) {
            setError(error.message || "An error occurred while adding the contact.");
        }
    };

    return (
        <div align="center" className="container">
            <Card className="shadow container">
                <div align="left">
                    <Form onSubmit={handleSubmit}>
                        {error && <p style={{ color: "red" }}>{error}</p>}

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
                            <Button type="submit" className="primary">Add Contact</Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    );
}
