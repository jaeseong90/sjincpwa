import React, {useContext, useState, useLayoutEffect, useEffect} from 'react';
import Login002 from './Login002';

const dataT = [
    {pValue : '1', pText : '박재성'},
    {pValue : '2', pText : '홍길동'},
    {pValue : '3', pText : '오바마'},
    {pValue : '4', pText : '아무개'}
];

const Login002Contariner = (props) => {

    const [data, setData] = useState(null);
    
    const getData =  () =>{
        setData(dataT);
    };

    useEffect(() => {
        getData();
    });
    
    return (
        <Login002 {...Object.assign({data:data},props)} />
    );
}
export default Login002Contariner;