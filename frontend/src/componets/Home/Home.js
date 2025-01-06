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
        <Row>
          <Col>
            <Row>
              <img className='photo' src={'portrait.jpg'} width={400} height={700} alt='photo' ></img>
            </Row>
            <Row>
              <h2>Tyler Tam 23</h2>
              <h3>B.S Computer Science - San Franscico State University
              </h3>
            </Row>
          </Col>
          <Col>
            <Row>
              <p className='profileDesc'> 
                Bachlor of Science in Computer Science, Strong Knowledge in
                Programming and networking, worked with many diffrent frame works and 
                programming lagagues: Java, Python, React, SQL, Mongo, etc. 
              </p>
              <p className='intrests'>
                In my free time I enjoy making food and taking walks outside,
                I also linke to explore new things and places I have never been to
              </p>
            </Row>
          </Col>
          </Row>

        </Container>

    )
}

export default Home