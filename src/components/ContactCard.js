import React from 'react';
import './ContactCard.css'
import {Card, Col, Container, Row} from "reactstrap";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import CakeIcon from '@mui/icons-material/Cake';


export default function ContactCard({image, name, email, phone, home, relation, birthday}) {
    return (
        <div style={{margin: 5}}>
            <Card>
                <div className="card-header">
                    <Container className="my-4">
                        <Row className="d-flex align-items-center">
                            <Col md="6" className="p-3 bg-light">
                                <img
                                    style={{margin: 5}}
                                    className="rounded-circle img-fluid profile-img"
                                    alt="Profile"
                                    src={image}
                                    height="150px"
                                    width="150px"
                                />
                            </Col>
                            <Col align="left" md="6" className="p-3 bg-light">
                                 {/*Right Component Content*/}
                                <h5>{name}</h5>
                                <p>{email}</p>
                                <p>{phone}</p>
                            </Col>
                        </Row>
                    </Container>
                    <hr></hr>
                    <div align="left">
                        <p><HomeIcon/> {home}</p>
                        <p><GroupIcon/> {relation}</p>
                        <p><CakeIcon/> {birthday}</p>
                    </div>
                </div>
            </Card>

        </div>
    )
}