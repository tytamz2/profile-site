import React, { useEffect, useState } from 'react';
import navbar from '../Layout/nav'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import '../../css/Home.css'

function Home(){



    return(
        <Container className='home'>
          <Row className="justify-content-md-center">
            Tyler Tam
          </Row>

        </Container>

    )
}

export default Home