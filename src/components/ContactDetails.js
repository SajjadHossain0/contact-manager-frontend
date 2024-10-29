import React from 'react';
import {Card} from "reactstrap";
import {MdOutlineWork} from "react-icons/md";

export default function ContactDetails({image,name,phone,email,home,work,birthday,social,relation}) {
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
                                            <p>{phone}</p>
                                        </div>
                                        <hr></hr>
                                        <div align="left" className="profile-contact">

                                            <div style={{fontSize: 20}}>
                                                <MdOutlineWork /> {work}
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
                            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
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