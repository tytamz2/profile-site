import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function Home(){



    return(
        <div>
            <h1>Profile</h1>

            <Container>
                <Col className='photo'>
                    {/* Photo Here */}
                </Col>
                <Col>
                    <Row>
                        <h2>Tyler Tam</h2>
                        <h3>Computer Programmer</h3>
                    </Row>
                    <Row className='About'>
                        <p>
                            I enjoy playing online games, taking walks outside and watching sports
                        </p>
                    </Row>
                </Col>
            </Container>
        </div>

    )
}

export default Home