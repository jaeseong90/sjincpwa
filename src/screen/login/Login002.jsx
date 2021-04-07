import React from 'react';
import {Button, Container, Card, Row, Col} from 'react-bootstrap';
import {Link,useParams, useHistory,useLocation} from 'react-router-dom';
import {PrivateRoute, useAuth, authContext, ProvideAuth} from 'context/AuthContext';
import {useParam} from 'common/common';
import {PageHeader} from 'component';
import {icon} from 'images'

let selected = "";

const Login002 = (props) => {
    
    let auth = useAuth();
    let history = useHistory();
    const query = useParam();

    const callback = (result)=>{
        
        if(result){
            auth.signin(()=>{history.replace('/')},{조:query.areaText,name:selected});   
        }
    }
    
    const login =(text) =>{
        selected = text;
        props.message.show('로그인',text + '님으로 로그인하시겠습니까?',callback,'md');
    }


    return   <>
        <PageHeader {...props} 
        title={query.areaText}
        isBack={true}
        />
        <Container>
        {( 
            props.data===null?(<></>):(
                <Row>
            {(props.data.map((item,index)=>(
                <Col>
                    <Card style={{width:"100px",border:'none'}} key={item.pValue} className="" onClick={()=>login(item.pText)} >
                        <Card.Img src={icon} alt={item.pText} />
                        <Card.ImgOverlay>
                            <Card.Text>{item.pText}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            )))}
            </Row>)
        )}
        </Container>
    </>;
}

export default Login002;