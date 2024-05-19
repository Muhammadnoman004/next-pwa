'use client'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='p-3' sticky='top' style={{ boxShadow: "0px 2px 5px #329BDB" }}>
                <Container fluid>
                    <Navbar.Brand href="#" style={{ fontWeight: 'bold' }}>My Site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action3" >Project</Nav.Link>
                            <Nav.Link href="#action4" >Contact</Nav.Link>
                        </Nav>
                        <Button variant="outline-primary">Login</Button>
                        <Button className='mx-3' variant="primary">Signup</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
