import React from 'react'
import Tailh1 from '../UI/Tailh1'
import TailBlueButton from '../UI/TailBlueButton'
import { useState, useEffect} from 'react'
import TrafficNav from './TrafficNav'
import TailTable from '../UI/TailTable'

export default function Traffic() {
    const [tdata,setTdata]=useState(); //전체데이터
    const [c1, setC1] =useState();     //사고유형대분류
    const [c2, setC2] =useState();     //사고유형중분류

    const [selC1, setSelC1] =useState();  //선택된 대분류
    const [selC2, setSelC2] =useState();  //''

    const [detail, setDetail] =useState();

    //async: 비동기 함수라는 뜻
    const urlFetch= async()=>{ 
        let apikey = process.env.REACT_APP_APIKEY;
        let url=`https://api.odcloud.kr/api/15070282/v1/uddi:34f1f0b1-1289-49db-be1b-a4566880bb97?`;
        url+=`page=1&perPage=20&returnType=JSON`;
        url+=`&serviceKey=${apikey}`;
        // console.log(url);

        //await을 쓸시 fetch가 될때까지 기다름
        //동기에서 .then과 같은 결과
        const resp = await fetch(url)
        const data = await resp.json();

        // console.log(data);
        setTdata(data.data);
    }
    
    useEffect(()=>{
        urlFetch();
    },[])

    useEffect(()=>{
        //1.초기화
        if(tdata==undefined) return; //tdata:undefined: useState에서 초기화를 시켜주거나useState([]) 실행이 되지 않게 막기
        console.log(tdata[0]);
     
        //2.대분류 생성
       
        let temp =tdata.map(item=>item["사고유형대분류"]);
            // let temp =tdata.map(item=>item.사고유형대분류);
            // let temp=[]
            // for(let i=0; i<tdata.length;i++)
            //     temp.push(tdata[i]["사고유형대분류"]);
        
        //3.중복방지 배열화
        temp = new Set(temp);
        temp = [...temp];
        // console.log(temp);

        setC1(temp);
        
    },[tdata]) 

    useEffect(()=>{
        // console.log(`selC1 =${selC1}`);
        if(selC1==undefined) return;
        let c1type = tdata.filter(item=>item.사고유형대분류==selC1);
        let c2tm = c1type.map(item=>item.사고유형중분류)
        // console.log(c2tm);
        setC2(c2tm);
        //초기화
        setSelC2('');
        setDetail('');

    },[selC1])

    useEffect(()=>{
        // console.log(`selC1 =${selC1}`);
        if(selC2==undefined) return;
        let type = tdata.filter(item=>item.사고유형대분류==selC1
                                        &&item.사고유형중분류==selC2);
        // let tm = type.map(item=>item);
        // console.log(c2tm);
        setDetail(type);
        console.log(detail);
        

    },[selC2])
 
  return (
    //mx-auto: 중앙 , h-screen: 한 화면을 채우기
    <div className='container mx-auto h-screen'> 
        <div className='flex flex-col justify-top items-center w-full h-full my-8'>
            <Tailh1 title={'도로교통공단_사고유형별 교통사고 통계'}/>
            {/* w- 지정하지 않으면 자동 싸기가 된다 */}
            <div className='w-4/5 my-10'>
                {/* c1이 존재할시에만 */}
                {c1&&<TrafficNav title={'대분류'} carr={c1} sel={selC1} setSel={setSelC1}/>}
            </div>
            <div className='w-4/5'>
                {c2&&<TrafficNav title={'중분류'} carr={c2} sel={selC2} setSel={setSelC2}/>}
            </div>
            <div className='w-4/5'>
            <table>
                {detail&&detail.map((d,idx)=> <TailTable key={`${d}${idx}`} rank={idx+1} movieNm={d["사고유형"]} audiCnt={d["사망자수"]}  rankInten={d[2]}  />)}
            </table>
            </div>
        </div> 
    </div>
  )
}
