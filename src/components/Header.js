import React, {useState} from 'react';
import {
    Input,
    InputGroup,
    InputGroupText,
    ListGroup,
    ListGroupItem,
    Navbar,
    NavbarBrand,
    Popover,
    PopoverBody
} from "reactstrap";
import {Avatar} from "@mui/joy";
import {FaSearch} from "react-icons/fa";


export default function Header() {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const togglePopover = () => setPopoverOpen(!popoverOpen);

    return (
        <Navbar className="my-2" color="dark" dark>
            <NavbarBrand href="/">
                {/*<img
                    alt="logo"
                    src=""
                    style={{
                        height: 40,
                        width: 40
                    }}
                />*/}
                Contact
            </NavbarBrand>

            <div className="search">
                <InputGroup>
                    <InputGroupText>
                        <FaSearch/>
                    </InputGroupText>
                    <Input placeholder="search here" />
                </InputGroup>
            </div>

            <div>
                <Avatar
                    id="avatarPopover"
                    alt="Cindy Baker"
                    src="/static/images/avatar/3.jpg"
                    style={{cursor: 'pointer'}}
                    onClick={togglePopover}
                />

                <Popover
                    placement="bottom"
                    isOpen={popoverOpen}
                    target="avatarPopover"
                    toggle={togglePopover}
                >
                    <PopoverBody>
                        <ListGroup flush>
                            <ListGroupItem tag="button" action>
                                Sign in
                            </ListGroupItem>
                            <ListGroupItem tag="button" action>
                                Logout
                            </ListGroupItem>
                        </ListGroup>
                    </PopoverBody>
                </Popover>
            </div>

        </Navbar>
    );
}
