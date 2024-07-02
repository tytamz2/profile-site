import React from 'react';
import nav from './nav';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <div>
            <Nav/>
        </div>
    )
}

export default Layout