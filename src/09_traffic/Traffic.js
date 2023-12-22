import React from 'react'
import Tailh1 from '../UI/Tailh1'
import { useState, useEffect} from 'react'
import TrafficNav from './TrafficNav'


export default function Traffic() {
    const [tdata,setTdata]=useState(); //전체데이터
    const [c1, setC1] =useState();     //사고유형대분류
    const [c2, setC2] =useState();     //사고유형중분류

    const [selC1, setSelC1] =useState();  //선택된 대분류
    const [selC2, setSelC2] =useState();  //''

    const [detail, setDetail] =useState(); //상세정보
    const detailKey = ['사망자수','사망자수','중상자수', '경상자수','부상신고자수',] //상세정보순서

    //async: 비동기 함수라는 뜻
    const urlFetch= async()=>{ 
        let apikey = process.env.REACT_APP_APIKEY;
        let url=`https://api.odcloud.kr/api/15070282/v1/uddi:34f1f0b1-1289-49db-be1b-a4566880bb97?`;
        url+=`page=1&perPage=20&returnType=JSON`;
        url+=`&serviceKey=${apikey}`;
        console.log(url);

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
        if(tdata===undefined) return; //tdata:undefined: useState에서 초기화를 시켜주거나useState([]) 실행이 되지 않게 막기
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
        if(selC2===undefined) return;
        let type = tdata.filter(item=>item.사고유형대분류==selC1
                                        &&item.사고유형중분류==selC2);
        //Object 저장
        type = type[0]; //array에 있는 상태에서 빼오기
        
        console.log("detail", type);
        if(type===undefined) return;
        //Object.keys(type): type의 모든 key
        type = 
        type = detailKey.map((k,idx)=><div key={`d1${idx}`}>
                                        <div className='bg-orange-200 rounded-md flex justify-center items-center'>{k}</div>
                                        <div className='flex justify-center items-center text-orange-600'>{type[k]}</div>
                                        </div>
                            )
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
            <div className='w-4/5 my-10'>
            <div className="grid grid-cols-5 gap-5 ">
                {detail}
            </div>
            </div>
        </div> 
    </div>
  )
}
