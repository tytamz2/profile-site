import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function footer(){

    return(
        <div className='footer'>
            <Container className='footerText'>
                <Row>
                    <h2>Tyler Tam</h2>
                </Row>
                <Row>
                    <h2>(415)823-1283</h2>
                </Row>
                <Row> 
                    <h2>tytam1326@gmail.com</h2>
                </Row>
            </Container>
        </div>
    )
}

export default footer

