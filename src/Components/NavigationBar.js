import React from "react";
import '../App.css';
import {Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const NavigationBar = () => (
    <>
        <Navbar className='nav' sticky="top" expand={'lg'}>
            <Navbar.Brand className='nav-brand' href="/">LUC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav.Link className='nav-link' href="/home">About</Nav.Link>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end">
                <Nav.Link className='nav-link' href="/home">Login</Nav.Link>
                <Button className='nav-buttons'>Enroll</Button>
            </Navbar.Collapse>
        </Navbar>
    </>
)

