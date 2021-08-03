import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    return (
        <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home" className="portfolio-title">Vishal Maurya</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Education</Nav.Link>
                <Nav.Link href="#link">Experience</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">Contact Me</Nav.Link>               
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default Header
