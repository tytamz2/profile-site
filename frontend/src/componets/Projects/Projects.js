import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function Projects(){


    return(
        <div>
            <h1>Programming Projects</h1>

            <Container>
                <Row>
                    <Col>
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
                            {/* Project Link Here */}
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>Chat Appplication</h2>
                        </Row>
                        <Row>
                            <p>
                                Simple Chat Applactions. users are able to create an account
                                to chat with other users, allows users to edit thier profile 
                            </p>
                        </Row>
                        <Row>

                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row></Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects