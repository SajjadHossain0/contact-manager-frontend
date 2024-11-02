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
import {Avatar, Link} from "@mui/joy";
import {FaSearch} from "react-icons/fa";
import CallAPI from "../CallAPI";


export default function Header() {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const togglePopover = () => setPopoverOpen(!popoverOpen);

    const isAuthenticated = CallAPI.isAuthenticated();

    const handleLogout = () => {
        /*const confirmDelete = window.confirm("are you sure!");
        if (confirmDelete) {
            CallAPI.logout();
        }*/
        CallAPI.logout();

    }

    return (
        <Navbar className="my-2" color="dark" dark>

            {!isAuthenticated && (
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
            )}
            {isAuthenticated && (
                <NavbarBrand href="/all-contacts">
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
            )}

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
                            {!isAuthenticated &&
                                <ListGroupItem tag="button" action>
                                    <Link style={{textDecoration: 'none',color: 'black'}}
                                          href="/login">
                                        Sign in
                                    </Link>
                                </ListGroupItem>
                            }

                            {isAuthenticated &&
                            <ListGroupItem tag="button" action>
                                <Link style={{textDecoration: 'none',color: 'black'}}
                                href="/" onClick={handleLogout}>
                                    Logout
                                </Link>
                            </ListGroupItem>
                            }
                        </ListGroup>
                    </PopoverBody>
                </Popover>
            </div>

        </Navbar>
    );
}
