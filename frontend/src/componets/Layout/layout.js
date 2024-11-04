import React from 'react';
import Nav from './nav';
import footer from './footer'
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <div>
            <Nav/>
            <Container>
                <Outlet/>
                <footer/>
            </Container>
        </div>
    )
}

export default Layout