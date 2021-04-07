import React, {useState} from 'react';
import {PageContent, PageHeader, MessageBox} from 'component'
import {Card,Container,Row,Col,Modal,Button} from 'react-bootstrap';

const Call = (props) => {

  return (
    <>
       <Modal
          show={props.modalIsShow}
          onHide={()=>{
            props.setModalIsShow(false);
          }}

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          문자발송
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container fluid >
          {   
          props.call.data===null?(
          <>
          </>
          ):
          (
          <Row xs={4} >
          {props.call.data.map((item,index)=> ( 
          <Col key={index} style={{padding:"30px"}}> 
              <Card  onClick={()=>props.call.selectData(item)} style={{border:`${item.selected ? '2px solid #aaa':'2px solid #eee' }`}}>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                <Card.Text>{item.context}</Card.Text>
                </Card.Body>
              </Card>
          </Col>
          ))}
          </Row>
          )
          }
</Container>
</Modal.Body>
<Modal.Footer>
    <Button onClick={()=>props.setModalIsShow(false)} variant="secondary">닫기</Button>
    <Button onClick={()=>props.message.show('저장',`${props.call.data.filter((value=>value.selected))[0].title} 발송하시겠습니까?`,props.call.saveData)} variant="primary">발송하기 </Button>
</Modal.Footer>
</Modal>

    </>
  );
}

export default Call;