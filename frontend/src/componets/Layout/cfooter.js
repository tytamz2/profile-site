import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Modal from 'react-bootstrap/Modal';
import '../../css/Footer.css'

function cfooter(){

    return(

        <Modal.footer className="fixed-bottom">
        <Container>
            <p>Environment: {process.env.REACT_APP_TITLE}</p>
            <div className='foot'>
                <h2>Profile</h2>
            </div>
        </Container>            
        </Modal.footer>      
    );
}

export default cfooter

