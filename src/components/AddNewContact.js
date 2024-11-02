import React from 'react';
import {Card, CardGroup, Form, FormGroup, Input, Label} from "reactstrap";
import {Button} from "@mui/material";

export default function AddNewContact() {

    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [work, setWork] = React.useState('');
    const [home, setHome] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    const [socialLink, setSocialLink] = React.useState('');
    const [relationship, setRelationship] = React.useState('');

    return (
        <div align="center" className="container">
            <Card className="shadow container">
                <div align="left">
                    <Form>
                        <FormGroup>
                            <Label for="name">
                                Full Name
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                placeholder="Enter full name..."
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">
                                Number
                            </Label>
                            <Input
                                id="number"
                                value={number}
                                placeholder="Enter number..."
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="work">
                                Work
                            </Label>
                            <Input
                                id="work"
                                value={work}
                                placeholder="Enter work..."
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="home">
                                Home
                            </Label>
                            <Input
                                id="home"
                                value={home}
                                placeholder="Enter home..."
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="birthday">
                                Birthday
                            </Label>
                            <Input
                                id="birthday"
                                value={birthday}
                                placeholder="Enter Birthday (dd/mm/yyyy)..."
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="socialLink">
                                Social Link
                            </Label>
                            <Input
                                id="socialLink"
                                value={socialLink}
                                placeholder="Enter Social Link..."
                                type="url"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="relationship">
                                Relationship
                            </Label>
                            <Input
                                id="relationship"
                                value={relationship}
                                placeholder="Enter Relationship..."
                                type="text"
                            />
                        </FormGroup>

                        <div align="center">
                            <Button className="primary">Add Contact</Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    )
}