import React,{useState,useEffect} from 'react';
import Sample from './Sample'


const dataT = [
  {
    공급장소 : 'HA1',
    LOCA1 : 'HA01A',
    내외 : '',
    당공순 : 'LFBB0',
    부품번호:'65100-5010R',
    부품명칭:'HOOD PRE ASSY',
    납장:'WA',
    업체명:'BODY',
    SNP : 5,
    파레트넘버 : '',
    checked:false,
    selected:0
  },
  {
    공급장소 : 'HA1',
    LOCA1 : 'HA01A',
    내외 : '',
    당공순 : 'LFPA0',
    부품번호:'65112-9130R',
    부품명칭:'PANEL-HOOD OUTER',
    납장:'WA',
    업체명:'STAMPING',
    SNP : 20,
    파레트넘버 : '',
    checked:false,
    selected:0
  },
  {
    공급장소 : 'HA1',
    LOCA1 : 'HA01A',
    내외 : '',
    당공순 : 'LFPA0',
    부품번호:'65122-2032R',
    부품명칭:'PANEL-HOOD INNER',
    납장:'WA',
    업체명:'STAMPING',
    SNP : 100,
    파레트넘버 : '',
    checked:false,
    selected:0
  },
  {
    공급장소 : 'HA1',
    LOCA1 : 'HA01A',
    내외 : '',
    당공순 : 'LFBB0',
    부품번호:'65132-0794R',
    부품명칭:'REINF-GOOD INR',
    납장:'WA',
    업체명:'삼경정기',
    SNP : 60,
    파레트넘버 : '',
    checked:false,
    selected:0
  },
  {
    공급장소 : 'HA1',
    LOCA1 : 'HA01A',
    내외 : '',
    당공순 : 'LFBB0',
    부품번호:'65140-4903R',
    부품명칭:'PANEL ASSY-HOOD HING',
    납장:'WA',
    업체명:'삼경정기',
    SNP : 34,
    파레트넘버 : '',
    checked:false,
    selected:0
  },
  {
    공급장소 : 'HA1',
    LOCA1 : 'HA01A',
    내외 : '',
    당공순 : 'LFBB0',
    부품번호:'65140-0589R',
    부품명칭:'PANEL ASSY-HOOD HING',
    납장:'WA',
    업체명:'삼경정기',
    SNP : 34,
    파레트넘버 : '000',
    checked:false,
    selected: 0
  },
];

const SampleContainer = (props) => {
  
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  const getData =  () =>{
      if(data ===null){
        setData(dataT);
      }

  };

  useEffect(() => {
      getData();
  });

  const setChecked = (item) =>{
    setData(
      data.map(dataitem=>dataitem.부품번호===item.부품번호?{...dataitem,checked:!dataitem.checked}:dataitem)
    )
  }

  const selectData = (item) =>{
   
    if(item.selectindex===1){
      setData1(null);
      setData(data.map(dataitem=>dataitem.부품번호===item.부품번호?{...dataitem,checked:false,selectindex:0}:dataitem));
    }
    else if(item.selectindex===2){
      setData2(null);
      setData(data.map(dataitem=>dataitem.부품번호===item.부품번호?{...dataitem,checked:false,selectindex:0}:dataitem));
    }else if(item.selectindex===3){
      setData3(null);
      setData(data.map(dataitem=>dataitem.부품번호===item.부품번호?{...dataitem,checked:false,selectindex:0}:dataitem));
    }
    else if(data1==null){
      setData1(item);
      setData(data.map(dataitem=>dataitem.부품번호===item.부품번호?{...dataitem,checked:true,selectindex:1}:dataitem));
    }else if(data2==null){
      setData2({...item,checked:true,selected:2});
      setData(data.map(dataitem=>dataitem.부품번호===item.부품번호?{...dataitem,checked:true,selectindex:2}:dataitem));
    }
    else if(data3==null){
      setData3({...item,checked:true,selected:3});
      setData(data.map(dataitem=>dataitem.부품번호===item.부품번호?{...dataitem,checked:true,selectindex:3}:dataitem));
    }

  }




  

  return (
    <Sample {...Object.assign({data,setChecked,data1,setData1,data2,setData2,data3,setData3,selectData},props)} />
  );
}
export default SampleContainer;