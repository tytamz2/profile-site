import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import '../../css/Footer.css'

function footer(){

    return(

        <footer className="fixed-bottom">
        <Container>
            <p>Environment: {process.env.REACT_APP_TITLE}</p>
            <div className='foot'>
                <h2>Profile</h2>
            </div>
        </Container>            
        </footer>      
    );
}

export default footer

