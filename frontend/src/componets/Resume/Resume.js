import React, { useEffect, useState } from 'react';
import Pdf from './Resume-2';
import { Document, Page } from 'react-pdf';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume(){

    const Download = () =>{
        const Url = Pdf
        const link = document.createElement("a");
        link.href = Url
        link.download = Pdf
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <div>
            <h1>Resume</h1>
            <Document file={Pdf}>
                <Page pageNumber={1}/>
            </Document>

            <center>
                <Button onClick={Download}>
                    DownLoad Resume
                </Button>
            </center>
        </div>
    )
}

export default Resume