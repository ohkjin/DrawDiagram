import React, { useState, useEffect } from 'react'
import Tailh1 from '../UI/Tailh1'
import data from './dataFrcst.json'
import TailBlueButton from '../UI/TailBlueButton';

export default function Frcst() {
    const [dtTags,setDtTags] =useState();
    const [dtcnTags,setDtCnTags] =useState();
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];


    let dtcn = {};
    for(let i =0;i<dtKey.length;i++){
        dtcn[data[dtKey[i]]]=data[cnKey[i]]
    }

    const handleClick=(dt)=>setDtCnTags(dtcn[dt]);
    
    useEffect(()=>{
        setDtTags(
            dtKey.map((k,idx)=>
            <TailBlueButton key={`dt${idx}`} caption={data[k]} onClick={()=>(handleClick(data[k]))}/>
            )
        );
    },[])
  
  
    // dtKey.map((item, idx) => {
    //     return  dtcn[data[item]] = data[cnKey[idx]]
    //     // 날짜(key) : 지역미세먼지(value)인 dtcn 오브젝트 생성
    // });
    console.log(dtcn);

    // // 날짜 영역 만들기
    // let dtTag = Object.keys(dtcn).map((item, idx) => {
    //     return (
    //         <div 
    //         key={`dtcn${idx}`} 
    //         onClick={() => {handleClick(item)}}
    //         >
    //             {item}
    //         </div>
    //     );
    // });

    // // state 변수
    // const [cnTag, setCnTag] = useState();

    // 날짜가 클릭되었을 때 실행 함수

    return (
        <div className='container mx-auto h-screen'>
            <div className='flex justify-center items-center h-1/6 bg-slate-700'>
                <Tailh1 title={"초미세먼지 주간예보"} />
            </div>
            <div className='grow flex flex-col justify-center items-center bg-blue-50'>
                <div className='flex justify-center items-center'>
                    {dtTags}
                </div>
                <div className='flex justify-center items-center'>
                    {dtcnTags}
                </div>
            </div>
        </div>
    )
}
