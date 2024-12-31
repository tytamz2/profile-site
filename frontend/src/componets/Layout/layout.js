import React from 'react';
import Nav from './nav';
import cfooter from './cfooter'
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <div>
            <Nav/>
            <Container>
                {}
                <Outlet/>
                <cfooter/>
            </Container>
        </div>
    )
}

export default Layout