import React,{useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {PageContent, PageHeader} from 'component'
import {Button,Container,Row,Col,Table,Collapse,Fade,Dropdown } from 'react-bootstrap';
import {useAuth} from 'context/AuthContext';
import {BsFillCaretDownFill} from 'react-icons/bs';

const Sample4 = (props) => {

  const auth = useAuth();
 
  return (
    <>
       <PageHeader {...props} 

      isCall={true}
      isBack={true}
       title={`공정현황`}
      />
      <Container fluid>
        <Row>
          <Col>
            <Container fluid>
              <Row>
                <Col style={{display:'flex', flexDirection:'row'}}>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">작업구역</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>전체</Dropdown.Item>
                      <Dropdown.Item>1</Dropdown.Item>
                      <Dropdown.Item>2</Dropdown.Item>
                      <Dropdown.Item>3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">공급장소</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>전체</Dropdown.Item>
                      <Dropdown.Item>AC1</Dropdown.Item>
                      <Dropdown.Item>DF1</Dropdown.Item>
                      <Dropdown.Item>DF1</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">LOCA1</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>HA01A</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table bordered={true} hover={true}>
            <thead>
                <tr>
                  <th>공급장소</th>
                  <th>LOCA1</th>
                  <th>내외</th>
                  <th>당공순</th>
                  <th>부품번호</th>
                  <th>부품명칭</th>
                  <th>업체명</th>
                  <th>SNP</th>
                  <th>공급기준</th>
                  <th>잔여수량</th>
                  <th>&nbsp;&nbsp;</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Sample4;