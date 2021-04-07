import React, {useState} from 'react';
import {Container,Button,Modal} from 'react-bootstrap';
import MessageBox from './MessageBox';
import SideBar from './Sidebar.jsx';
import Overlay from './Overlay';
import ModalBox from './ModalBox';
import CallContainer from 'screen/Call'

// let modalBody = CallContainer;
let messageCb = ()=>{};

const Page = ({children}) =>{

    const [sidebarIsShow, setSidebarIsShow] = useState(false);

    const sidebarShow = () =>{
        setSidebarIsShow(true);
    }

    const [messageSize,setMessageSize] = useState('md');

    const [messageIsShow, setMessageIsShow] = useState(false);
    const [messageTitle,setMessageTitle] = useState('확인');
    const [messageContent,setMessageContent] = useState('하시겠습니까?');

    const [overlayIsShow, setOverlayIsShow] = useState(false);
    const [overlayType, setOverlayType] = useState('loading');

    const messageShow = (title,content,callback,size) =>{

        setMessageContent(content);
        setMessageTitle(title);
        
        if(size!= null){
            setMessageSize(size);
        }
        setMessageIsShow(true);
        messageCb=callback;
    }

    const messageCallback = (result)=>{
        messageCb(result);
    }

    const overlayShow = (type)=>{

    }

    // const [modalIsShow, setModalIsShow] = useState(false);
    // const [modalTitle, setmodalTitle] = useState('');
    
    // const modalShow = (title,component) =>{
    //     //modalBody=component;
    //     setmodalTitle(title);
    //     setModalIsShow(true);
    // }

    return <>
            <Overlay 
                overlayIsShow 
                setOverlayIsShow 
                overlayType 
                setOverlayType 
            />
            <MessageBox 
                messageIsShow={messageIsShow}
                setMessageIsShow={setMessageIsShow}
                title={messageTitle}
                content={messageContent}
                callback={messageCallback}
                side={messageSize}
            />
            {/* <ModalBox modalIsShow={modalIsShow}
             setModalIsShow={setModalIsShow}
             title={modalTitle}
             body={modalBody}
              /> */}
            <SideBar 
                sidebarIsShow={sidebarIsShow}
                setSidebarIsShow={setSidebarIsShow}
                message={{show:messageShow}}
            >
                {React.cloneElement(children, {
                    message: {show:messageShow}, 
                    sidebar:{show:sidebarShow},
                    // modal:{show:modalShow},
                    },null)}  
            </SideBar>
        </>;
}

export default Page;