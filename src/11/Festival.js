import React, { useEffect, useRef, useState } from 'react'
import Tailh1 from '../UI/Tailh1'
import TailCard from '../UI/TailCard';

export default function Festival() {
    const [fesdata,setFesdata]=useState();
    const [gulist,setGulist] = useState("");
    const [options,setOptions] = useState("");
    const [card,setCard] = useState("");
    const guRef = useRef("");
    const urlFetch=()=>{
        const apikey = process.env.REACT_APP_APIKEY;
        let url="https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?"
        url+=`serviceKey=${apikey}`
        url+="&pageNo=1&numOfRows=40&resultType=json"

        fetch(url)
        .then((resp)=>resp.json())
        // .then((data)=>console.log(data.getFestivalKr.item))
        .then((data)=>setFesdata(data.getFestivalKr.item))
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        urlFetch();
    },[])
    //구의 리스트 작성 및 리스트를 옵션에 넣기
    useEffect(()=>{
        console.log("fesdata",fesdata);
        if(fesdata===undefined) return;
        let temp = fesdata.map(fes=>fes.GUGUN_NM);
        // console.log(temp);
        temp = new Set(temp);
        temp = [...temp];
        setGulist(temp);
        temp = temp.map((op,idx)=> <option key={`op${idx}`} value={`${op}`}>{op}</option>);
        setOptions(temp);
    },[fesdata])

     //구를 선택시 자료가 나오게 하기
     const handleSelGu=()=>{
        let gu = guRef.current.value;
        let temp = fesdata.filter(fes=>fes.GUGUN_NM==gu);
        //Object는 바로 출력이 안됨
        temp = temp.map((t,idx)=><TailCard k={`festival${idx}`}
                                    imgSrc={t.MAIN_IMG_NORMAL.replace("http://","https://")}
                                    title= {t["TITLE"]}
                                    subtitle={t["MAIN_PLACE"]}
                                    by={t["ADDR1"]+t["ADDR2"]}
                                    tags={t["USAGE_DAY_WEEK_AND_TIME"]}
                                    />);
        setCard(temp);
        console.log(temp);
    }
  return (
    <div>
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className='container max-w-7xl px-6 lg:px-8 mx-auto'>
            <div className='flex flex-col justify-top items-center w-full h-full my-8'>
                <div className="flex max-w-xl lg:max-w-lg">
                    <Tailh1 title={'부산축제정보'}/>
                </div>
            </div>
            <div>
            <select id="selGu" ref={guRef} onChange={handleSelGu}>
                {options}
            </select>
            </div>
            <div className="mt-6 grid grid-flow-row-dense gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
                {card}
            </div>
        </div>
        </div>
    </div>
  )
}
