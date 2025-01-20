import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import '../../css/Links.css'

function Links(){
    return(
        <div className='contactLink'>
        <h1>Links</h1>

        <Container>
            <Row className='email'>  
                <h2> Email Contact: </h2>
                <a className='emailLink' href='mailto:tytam1326@gmail.com'>tytam1326@gmail.com</a>
            </Row>
            <Row>
                <Row>
                    <h2>Github</h2>
                </Row>
                <Row>
                    <a href='https://github.com/tytamz2'>tytamz2</a>
                </Row>
            </Row>
            <Row>
                <h3>Linkdin:</h3>
                <a href='http://www.linkedin.com/in/Tyler-Tam14'>Linkdin</a>
            </Row>
            <Row>
                <h2>Phone #: 1 (415)-823-1283</h2>
            </Row>
        </Container>
    </div>
    )
}

export default Links;