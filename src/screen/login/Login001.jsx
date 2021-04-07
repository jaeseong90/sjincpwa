import React from 'react';
import {Row, Col, Button, Container, Tabs, Tab} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {PageContent,PageHeader} from 'component';

const Login001 = (props) => {

  return <>
    <Container fluid >
    { 
        props.data===null?(
          <Row>
          </Row>
        ):
        (
          <Row>
            <Col style={{display:'flex',flexDirection:'column',padding:'50px'}}> 
              {props.data.map((item,index)=>(
                <Link to={`/login002?areaValue=${item.area}&areaText=${item.areaText}`} >
                    <Button key={item.index}  variant="primary" size="lg" style={{padding:"50px",marginTop:'50px'}} block>{item.areaText}</Button>
                </Link>
              ))}
            </Col>
        </Row>
        )
      }
    </Container>
  </>
}

export default Login001;