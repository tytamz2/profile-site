import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function Home(){



    return(
        <div id="NavBar">
            <nav>
          <ul>
            <li>
              <a href={`/projects`}>Projects</a>
            </li>
            <li>
              <a href={`/resume`}>Resume</a>
            </li>
            <li>
              <a href={`/links`}>Links</a>
            </li>
          </ul>
        </nav>
        </div>

    )
}

export default Home