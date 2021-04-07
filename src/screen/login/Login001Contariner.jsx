import React, {useContext, useState, useLayoutEffect, useEffect} from 'react';
import Login001 from './Login001';
import {useAuth} from 'context/AuthContext'
import {Link,useParams, useHistory,useLocation} from 'react-router-dom';

const dataT = [
    {area : '001', areaText : 'A조'},
    {area : '002', areaText : 'B조'},
];

const Login001Contariner = (props) => {
  
    const [data, setData] = useState(null);
    
    const getData =  () =>{
        setData(dataT);
    };

    useEffect(() => {
        getData();
    });

    return (
        <Login001 {...Object.assign({data:data},props)} />
    );
}

export default Login001Contariner;