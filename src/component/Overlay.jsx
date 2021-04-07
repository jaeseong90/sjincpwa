import React, { useEffect } from 'react';
import {Container, Row, Col, Accordion,Card, Button,ListGroup} from 'react-bootstrap';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from 'react-icons/bs'

const Overlay = ({children, overlayIsShow, setOverlayIsShow, overlayType}) =>{

    return <>
        <div className={`overlay ${overlayType} ${overlayIsShow?'show':''}`}>
            
        </div>
    </>;
}

export default Overlay;