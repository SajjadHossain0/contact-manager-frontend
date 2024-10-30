import React from 'react';
import {Button} from "@mui/material";

export default function Welcome() {
    return (
        <div align="center" className="home-container container">
            <h3>Welcome to contact manager application</h3>
            <p>Where you manage your all contacts</p>
            <br/>
            <hr/>
            <br/>
            <span>To add new contacts please</span>
            <Button href="/all-contacts" className="icon-link">Sign in</Button>
        </div>
    );
}