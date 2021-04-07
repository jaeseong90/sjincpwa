import React, { useEffect } from 'react';
import {Container, Row, Col, Accordion,Card, Button,ListGroup} from 'react-bootstrap';
import './Sidebar.css';
import {BsFillHouseDoorFill} from 'react-icons/bs';
import {useAuth} from 'context/AuthContext';
import {icon} from 'images';
import {Link,useParams, useHistory,useLocation} from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';

const Sidebar = (props) =>{

    const auth = useAuth();
    let history = useHistory();

    const logout = (result)=>{
        if(result){
            auth.signout(()=>history.replace('/'));
        }
    }

    return <>
        <div className={`sidebar-overay ${props.sidebarIsShow?'show':''}`}
             onClick={() => props.setSidebarIsShow(false)}></div>
        <div className={`sidebar-menu ${props.sidebarIsShow?'show':''}`}>
            <ListGroup>
                
                <ListGroup.Item onClick={()=>props.setSidebarIsShow(false)}>
                    <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </ListGroup.Item>
                {auth.user?(<ListGroup.Item>
                    <Card style={{width:"100px",border:'none'}}>
                        <Card.Img src={icon} alt={auth.name} />
                        <Card.Text>{auth.user.조} {auth.user.name}</Card.Text>
                    </Card>

                    <div style={{textAlign:'right'}}><Button variant="outline-primary" onClick={()=>props.message.show('로그아웃','로그아웃하시겠습니까?',logout)}>Logout</Button></div>

                </ListGroup.Item>):<></>}
                
                <Link to='/'>
                    <ListGroup.Item>
                        <BsFillHouseDoorFill size={30} style={{marginTop:"-10px"}} />
                        <span style={{fontSize:"20px", lineHeight:"20px"}}> 작업대기</span>
                    </ListGroup.Item>
                </Link>
                <Link to='/Sample2'>
                    <ListGroup.Item>
                        <span style={{fontSize:"20px", lineHeight:"20px"}}>작업현황</span>
                    </ListGroup.Item>
                </Link>
                <Link to='/Sample3'>
                    <ListGroup.Item>
                        <span style={{fontSize:"20px", lineHeight:"20px"}}>재고현황</span>
                    </ListGroup.Item>
                </Link>
                <Link to='/Sample4'>
                    <ListGroup.Item>
                        <span style={{fontSize:"20px", lineHeight:"20px"}}>공정현황</span>
                    </ListGroup.Item>
                </Link>
                {/* <Accordion>
                    <Accordion.Toggle   eventKey="0">
                        2레이어
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        메뉴
                    </Accordion.Collapse>
                </Accordion> */}
            </ListGroup>
            
            
        </div>      
        {props.children}
    </>;
}

export default Sidebar;