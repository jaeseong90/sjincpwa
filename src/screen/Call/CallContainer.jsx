import React,{useState,useEffect, useLayoutEffect} from 'react';
import Call from './Call'

const dataT2 = [
    {
        title : '긴급발송',
        context : '긴급발송입니다',
        selected:true
        },
    {
    title : '결품',
    context : '결품내용',
    selected:false
    },
    {
    title : '긴급호출',
    context : '긴급호출입니다',
    selected:false
    }, {
    title : '기타1',
    context : '기타1내용',
    selected:false
    }, {
        title : '기타2',
        context : '기타1내용',
        selected:false    
    },
            
];

const CallContainer = (props) => {

    const [data, setData] = useState(null);
  
    const getData =  () =>{
        setData(dataT2);
    };

    useEffect(() => {
        if(data===null){
            getData();
        }
    });

    const selectData = (item) =>{
        setData(
            data.map(dataitem=>
                item.title===dataitem.title?{...dataitem,selected:true}:{...dataitem,selected:false}
            )
        );
    }

    const saveData = (result)=>{
        if(result){
            props.setModalIsShow(false);
            alert('발송완료');
        }
    }

    return (
    <Call {...Object.assign({call:{data,selectData,saveData}},props)} />
  );
}
export default CallContainer;