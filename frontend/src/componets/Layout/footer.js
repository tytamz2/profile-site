import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function footer(){

    return(

        <footer className="fixed-bottom">
        <Container>
            <p>Environment: {process.env.REACT_APP_TITLE}</p>
        </Container>            
        </footer>      
    );
}

export default footer

