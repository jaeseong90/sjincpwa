import React from 'react';
import Container from 'react-bootstrap/Container';

const PageContent = ({children}) =>{
    return <Container fluid>{children}</Container>;
}

export default PageContent;