import React, { useEffect, useState } from 'react';
import { pdfjs, Document, Page, StyleSheet } from 'react-pdf';
import pdf from '../../Files/Resume-2.pdf'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import '../../css/Resume.css'


  


function Resume(){

    return(
        <div>
            <Container>
                <h1>Resume</h1>

            <div>
                <iframe src={'/Resume-2.pdf'}
                 width="100%"
                 height="800px"
                 loading="lazy"
                 title="Resume"></iframe>
            </div>
            </Container>
        </div>
    )
}

export default Resume