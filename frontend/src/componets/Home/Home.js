import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion';
import '../../css/Home.css'

function Home(){



    return(
        <Container className='home' fluid="xl">
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
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Profile Description</Accordion.Header>
              <Accordion.Body>
              Bachlor of Science in Computer Science, Strong Knowledge in
                Programming and networking, worked with many diffrent frame works and
                programming lagagues: Java, Python, React, SQL, Mongo, etc.
              </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
              <Accordion.Header>Intrests</Accordion.Header>
              <Accordion.Body>
                In my free time I enjoy making food and taking walks outside,
                I also linke to explore new things and places I have never been to
                before
              </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            </Row>
          </Col>
          </Row>

        </Container>

    )
}

export default Home