import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import '../../css/Projects.css'

function Projects(){


    return(
        <div>
            <h1>Programming Projects</h1>

            <Container>
                <Row>
                    <Col className='col1'>
                        <Row>
                            <h2>Activity Tracker</h2>
                        </Row>
                        <Row>
                            <p>Activity Tracker applications allows users
                                to create and view tasks, users are able filter
                                and time thier tasks
                            </p>
                        </Row>
                        <Row>
                            <h2>Frameworks used:</h2>
                            <p>NodeJS, React, bootstrap, expressJS, etc.</p>
                        </Row>
                    </Col>
                    <Col className='col2'>
                        <Row>
                            <h2>Chat Appplication</h2>
                        </Row>
                        <Row>
                            <p>
                                Simple Chat application. users are able to create an account
                                to chat with other users, allows users to edit thier profile 
                            </p>
                        </Row>
                        <Row>
                            <h2>Frameworks used:</h2>
                            <p>Java,NodeJS, React</p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className='col3'>
                        <Row></Row>
                        <Row></Row>
                        <Row>
                            <a href=''>Project Repo</a>
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects