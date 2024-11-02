import React from 'react';
import './ContactCard.css'
import {Card} from "reactstrap";
import HomeIcon from '@mui/icons-material/Home';
import {MdOutlineWork} from "react-icons/md";


export default function ContactCard({name, email, phone, home, work}) {
    return (
        <div style={{margin: 5}}>
            <Card body className="text-center">
                <h5>{name}</h5>
                <p>{email}</p>
                <p>{phone}</p>
                <hr></hr>
                <div align="left">
                    <p><HomeIcon/> {home}</p>
                    <p><MdOutlineWork/> {work}</p>
                    <p>see more...</p>
                </div>
            </Card>

        </div>
    )
}