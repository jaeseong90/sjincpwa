import React, {useState,useEffect} from 'react';
import {Navbar, Button, Container, Row, Col,Card, Modal} from 'react-bootstrap';
import { BsFillHouseDoorFill,BsJustify,BsArrowLeft,BsList } from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai'
import {useSideMenu} from 'context/SideMenuContext';
import {Link,useParams, useHistory,useLocation} from 'react-router-dom';
import CallContainer from 'screen/Call/CallContainer';

const PageHeader = (props) =>{

    let history = useHistory();
    let title = props.title;
    let isBack = props.isBack;
    let isMenu = props.isMenu;
    let leftComponent = props.leftComponent;
    let rightComponrnt = props.rightComponrnt;
    let isCall = props.isCall;


    const clickSide = ()=>{   
        props.sidebar.show();
    }

    const clickCall = ()=>{
        setModalIsShow(true);
    }

    const [modalIsShow, setModalIsShow] = useState(false);

    return  <>
            <CallContainer {...props} modalIsShow={modalIsShow} setModalIsShow={setModalIsShow} />
            <Container fluid style={{borderBottom:'2px solid #aaa'}}> 
                    <Row>
                        <Col style={{display:'flex',flexDirection: 'row'}}>
                            {isBack?<BsArrowLeft size={50} onClick={()=>history.goBack()} />:<></>}
                            {isMenu?<BsList size={50} onClick={clickSide} />:<></>}
                        </Col>
                        <Col style={{display:'flex',justifyContent: 'center'}}>
                            <h1>{title}</h1>
                        </Col>
                        <Col style={{display:'flex',flexDirection: 'row-reverse'}}>
                            {isCall?<AiFillPhone size={50} onClick={clickCall} />:<></>}
                        </Col>
                    </Row>
                </Container></>;
}

export default PageHeader;