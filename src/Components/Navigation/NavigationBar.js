import React from "react";
import '../../App.css';
import '../../custom.scss';
import {Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";

/*
The top navigation bar.
 */
export const NavigationBar = () => (
    <>
        <Navbar fluid className='nav' sticky="top" expand={'lg'}>
            <Navbar.Brand className='nav-brand' href="/">LUC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            {typeof (global.USER) !== 'undefined' && global.USER !== '' ? (
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link className='nav-link' href="/logout">Logout</Nav.Link>
            </Navbar.Collapse>
            ): (
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className='nav-link' href="/login">Login</Nav.Link>
                    <Button variant="outline-secondary" href="/enroll">Enroll</Button>
                </Navbar.Collapse>
            )}
        </Navbar>
    </>
)

