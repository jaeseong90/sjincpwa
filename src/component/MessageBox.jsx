import React, {useState} from 'react';
import {Modal, Button } from 'react-bootstrap';

const MessageBox = ({messageIsShow,setMessageIsShow,title,content,callback,size}) =>{

  //size 'sm' | 'lg','xl'

    return (
        <Modal 
            size={size}
            show={messageIsShow}
            onHide={()=>{
              callback(false);
              setMessageIsShow(false);
            }}
        >
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{content}</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={()=>{
          setMessageIsShow(false);
          callback(false);
        }}>
            아니요
          </Button>
          <Button variant="primary" onClick={()=>{
            setMessageIsShow(false);
            callback(true);
            }}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    )

}





export default MessageBox;