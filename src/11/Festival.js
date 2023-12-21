import React, { useEffect, useRef, useState } from 'react'
import Tailh1 from '../UI/Tailh1'
import TailCard from '../UI/TailCard';
import TailSelect from '../UI/TailSelect';

export default function Festival() {
    const [fesdata,setFesdata]=useState();//useState(): 변수
    const [gulist,setGulist] = useState([]);
    // const [options,setOptions] = useState("");
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
    // useEffect(()=>{}) : Since no dependancy array, runs on every render
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
        temp = [...temp].sort();
        setGulist(temp);
        // temp = temp.map((op,idx)=> <option key={`op${idx}`} value={op}>{op}</option>);
        // setOptions(temp);
    },[fesdata])

     //구를 선택시 자료가 나오게 하기
     const handleSelGu=(e)=>{
        // let gu = e.target.value;
        let gu = guRef.current.value;
        let temp = fesdata.filter(fes=>fes.GUGUN_NM===gu);
        //Object는 바로 출력이 안됨
        temp = temp.map((t,idx)=><TailCard k={`festival${idx}`}
                                    theme={'white'}
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
            <div className="w-72">
            <TailSelect items={gulist} rf={guRef} handleChange={handleSelGu} init="--선택--"/>
            {/* <select id="selGu" ref={guRef} onChange={handleSelGu}>
                <option value="">--지역 선택--</option>
                {options}
            </select> */}
            </div>
            <div className="mt-6 grid grid-flow-row-dense gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
                {card}
            </div>
            
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#868cff] to-[#fc89e3] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 30.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>
        </div>
    </div>
  )
}
