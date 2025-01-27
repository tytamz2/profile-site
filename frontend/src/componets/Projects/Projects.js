import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../../css/Projects.css'

function Projects(){


    return(
        <div className='project'>
            <h1>Programming Projects</h1>

            <Container className='prj' fluid>
                <Row>
                    <Col xs lg="4">
                    <Card style={{ width: '20rem' }} className='col1'>
                <Card.Body>
                <Card.Title>Activity Tracker</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Team Project</Card.Subtitle>
                <Card.Text>
                    Activity Tracker applications allows users
                    to create and view tasks, users are able filter
                    and time thier tasks, Great for keeping track of 
                    current tasks needed to be done
                </Card.Text>
                <Accordion>
                <Accordion.Item eventKey="0">
              <Accordion.Header>Frameworks</Accordion.Header>
              <Accordion.Body>
                React, nextJs, SQL, Bootstrap
              </Accordion.Body>
              </Accordion.Item>
                </Accordion>
                <Card.Link href="#">Site Link</Card.Link>
                </Card.Body>
                 </Card>
                    </Col>
                    <Col >
                    <Card style={{ width: '20rem' }} className='col2'>
                    <Card.Body>
                        <Card.Title>Chat Appplication</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Team Project</Card.Subtitle>
                        <Card.Text>
                        Simple Chat application. users are able to create an account
                        to chat with other users, allows users to edit thier profile
                        </Card.Text>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>Frameworks</Accordion.Header>
                            <Accordion.Body>
                            Java,React, MongoDB, etc
                            </Accordion.Body>
                            </Accordion.Item>
                </Accordion>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <Card style={{ width: '20rem' }} className='col3'>
                    <Card.Body>
                        <Card.Title>Profle Website</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Indivdual Project</Card.Subtitle>
                        <Card.Text>
                        Basic Website to display my personal profile and provide contact info
                        and resume
                        </Card.Text>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>Frameworks</Accordion.Header>
                            <Accordion.Body>
                            JS,React, etc
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Card.Link href="#">Repo Link</Card.Link>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects