import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

function nav(){


    return(
        <header className="nav">
             <Navbar expand="lg" bg='primary' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href='/'>Tyler Tam's Profile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='navbar-collapse'>
                        <Nav className='justify-content-center'>
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={`/projects`}>Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={`/resume`}>Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={`/links`}>Links</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}


export default nav