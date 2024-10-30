import React from 'react';
import './ContactCard.css'
import {Card, Col, Container, Row} from "reactstrap";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import CakeIcon from '@mui/icons-material/Cake';


export default function ContactCard({image, name, email, phone, home, relation, birthday}) {
    return (
        <div style={{margin: 5}}>
            <Card body className="text-center">
                <div align="center">
                <img
                    style={{margin: 5}}
                    className="rounded-circle img-fluid profile-img"
                    alt="Profile"
                    src={image}
                    height="100px"
                    width="100px"/>
                </div>
                <h5>{name}</h5>
                <p>{email}</p>
                <p>{phone}</p>
                <hr></hr>
                <div align="left">
                    <p><HomeIcon/> {home}</p>
                    <p><GroupIcon/> {relation}</p>
                    <p><CakeIcon/> {birthday}</p>
                </div>
            </Card>

        </div>
    )
}