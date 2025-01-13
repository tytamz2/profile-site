import React from 'react';
import Nav from './nav';
import SiteFooter from './siteFooter'
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <div>
            <Nav/>
            <Container fluid='xl'>
                {}
                <Outlet/>
                <SiteFooter/>
            </Container>
        </div>
    )
}

export default Layout