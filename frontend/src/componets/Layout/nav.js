import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

function nav(){


    return(
        <header>
             <Navbar expand="lg" bg='primary' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href='/'>Tyler Tam's Profile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='navbar-collapse'>
                        <Nav className='me-auto justify-content-end flex-grow-1'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='/resume'>Resume</Nav.Link>
                            <Nav.Link href='/links'>links</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="/">Profile</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link hrec="/links">Links</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </header>
    )
}


export default nav