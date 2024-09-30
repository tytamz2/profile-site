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
        // <div className='footer'>
        //     <Container className='footerText'>
        //         <Row>
        //             <h2>Tyler Tam</h2>
        //         </Row>
        //         <Row>
        //             <h2>(415)823-1283</h2>
        //         </Row>
        //         <Row> 
        //             <h2>tytam1326@gmail.com</h2>
        //         </Row>
        //     </Container>
        // </div>
    )
}

export default footer

