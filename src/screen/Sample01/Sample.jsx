import React, {useState} from 'react';
import {PageContent, PageHeader, MessageBox} from 'component'
import {Button,Container,Row,Col,Table,Collapse,Fade,
  ToggleButton,ToggleButtonGroup, FormCheck, FormControl} from 'react-bootstrap';
import {useAuth} from 'context/AuthContext';
import {BsFillCaretDownFill} from 'react-icons/bs';

const Sample = (props) => {
  const auth = useAuth();
  const [open, setOpen] = useState(true);

  const checkStyle = (item)=>{

    let color ='';

    color = props.data1 && props.data1.부품번호 === item.부품번호 ? '#c01' :color;

    return color;
  }

  return (
    <>
      <PageHeader {...props} 
      isMenu={true}
      isCall={true}
       title={`${auth.user.조} : ${auth.user.name}`}
      />
      <Container fluid>
        <Row>
          <Col>
            {props.data1==null?<></>:(
               <Table bordered={true} style={{textAlign:'center', tableLayout:'fixed'}} >
               <tr height="5">
                 <td colSpan={2}>
                 {props.data1.부품번호}
                </td>
               </tr>
               <tr>
                 <td colSpan={2} >{props.data1.부품명칭}</td>
               </tr>
               <tr>
                 <td>{props.data1.SNP}</td>
                 <td>{props.data1.당공순}</td>
               </tr>
               <tr>
                 <td>{props.data1.공급장소}</td>
               </tr>
               <tr>
                 <td>{props.data1.납장}</td>
                 <td>하역</td>
               </tr>
             </Table>
            )}
          </Col>
        </Row>
        <Row>
            <Col style={{display:'flex', justifyContent:'center',}}>
              <BsFillCaretDownFill onClick={()=>setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open} size={50}
              style={{transform: `${open?'rotate(180deg)':''}`}}
              />
            </Col>
        </Row>
        <Row style={{display:`${open?'block':'none'}`}}>
          <Col>
            <Fade in={open} >
            <Table bordered={true} hover={true} id="example-collapse-text" >
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
                  <th>파레트넘버</th>
                  <th>공급기준</th>
                  <th>잔여수량</th>
                  <th>&nbsp;&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {props.data==null?<></>:props.data.map((dataitem,index)=>
                  <tr  style={{background:`${checkStyle(dataitem)}`}}>
                  <td>{dataitem.공급장소}</td>
                  <td>{dataitem.LOCA1}</td>
                  <td>{dataitem.내외}</td>
                  <td>{dataitem.당공순}</td>
                  <td onClick={()=>props.selectData(dataitem)}>{dataitem.부품번호}</td>
                  <td onClick={()=>props.selectData(dataitem)}>{dataitem.부품명칭}</td>
                  <td>{dataitem.업체명}</td>
                  <td style={{textAlign:'right',fontWeight:'bold'}}>{dataitem.SNP}</td>
                  <td style={{padding:0,margin:0}}>
                    <FormControl value={dataitem.파레트넘버} style={{margin:0,textAlign:'right'}} />
                  </td>
                  <td>{dataitem.공급기준}</td>
                  <td>{dataitem.잔여수량}</td>
                  <td>
                      <input type="checkbox"  variant="secondary" checked={dataitem.checked} onClick={(e) => {
                      props.setChecked(dataitem)}} />
                    </td>
                  </tr>
              )}
              </tbody>
            </Table>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container fluid>
              <Row>
                <Col>
                  <Button onClick={()=>props.message.show('작업완료', '작업완료하시겠습니까?',(result)=>{if(result)alert('완료되었습니다')})}>작업완료</Button>&nbsp;
                  <Button onClick={()=>props.message.show('선점하기', '작업선점하시겠습니까?',(result)=>{if(result)alert('작업선점되었습니다')})}variant="secondary">선점하기</Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sample;