import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Link } from "@react-email/components";
import '../../css/Links.css'

function Links(){
    return(
        <div>
        <h1>Links</h1>

        <Container>
            <Row>
                <Col>
                    <h2> Email Contact:</h2>
                </Col>
                <Col>
                    <Link href='tytam1326@gmail.com'>tytam1326@gmail.com</Link>
                </Col>
            </Row>
            <Row>
                <Row>
                    <h2>Github</h2>
                </Row>
                <Row>
                    <a href=''>tytamz2</a>
                </Row>
            </Row>
            <Row>
                <h2>1 415-823-1283</h2>
            </Row>
        </Container>
    </div>
    )
}

export default Links;