import React, {useState} from 'react';
import {Modal, Button } from 'react-bootstrap';


const ModalBox = ({modalIsShow, setModalIsShow,title,body, isFooter}) =>{

    return (
        <Modal

            show={modalIsShow}
            onHide={()=>{
              setModalIsShow(false);
            }}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {body}
        </Modal.Body>
        {isFooter?<Modal.Footer>
            <Button onClick={()=>setModalIsShow(false)}>Close</Button>
        </Modal.Footer>:<></>}
        
        </Modal>
    )

}




export default ModalBox;