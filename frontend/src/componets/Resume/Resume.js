import React, { useEffect, useState } from 'react';
import Pdf from '../../Files/Resume-2.pdf'
import { pdfjs, Document, Page, StyleSheet } from 'react-pdf';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  


function Resume(){

    const [numPages, setNumPages] = useState<number>(2);
    const [pageNumber, setPageNumber] = useState<number>(1);

    // function onDocumentLoadSuccess({ numPages }: { numPages= number }): void {
    //     setNumPages(numPages);
    //   }
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
            <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page PageNumber={1}/>
            </Document>
            <p>
            Page {pageNumber} of {numPages}
            </p>

            <center>
                <Button onClick={Download}>
                    DownLoad Resume
                </Button>
            </center>
        </div>
    )
}

export default Resume