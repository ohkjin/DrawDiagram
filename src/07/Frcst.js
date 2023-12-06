import {useState, useEffect} from 'react'
import TailBlueButton from '../UI/TailBlueButton';
import Tailh1 from '../UI/Tailh1';
import TailMessage from '../UI/TailMessage';

export default function Frcst() {
    // const [test, setTest] =useState();
    const [dataF, setDataF] = useState();
    const [dt, setDT] = useState();
    const [cn, setCN] = useState();

    const dtKey = ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt",];
    const cnKey = ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn",];
    const rgKey = [""]
    
    const getData=()=>{
        let url="https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?";
        // let apiKey를 노출하지 않기 위해 환경 변수 생성 => .env(gitignore에도)
        url+=`serviceKey=${process.env.REACT_APP_APIKEY}`
        url+=`&returnType=json&numOfRows=100&pageNo=1`
        url+=`&searchDate=2023-11-30`
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>setDataF(data.response.body.items[0]))
        .catch(err => console.log(err))
    }
    //날짜 클릭시
    const handleDtClick=(idx)=>{
        // console.log(dataF[cnKey[idx]]);
        let rgObject =dataF[cnKey[idx]]
        let rgArr =rgObject.split(",")
        let rgEachArr = rgArr.map((rg)=>rg.split(":"))
        rgEachArr = rgEachArr.map((rg)=>rg[0].trim(" "))
        console.log(rgEachArr);
        setCN(
            rgEachArr.map((a,idx)=>{
                let state =<div>
                            </div>;
                switch(a[1]){
                    case "높음":
                        state=<div className='text-blue-500 m-4 px-4 rounded-md'>
                                    ❤
                                </div>;
                        break;
                    case "낮음":
                        state=<div className='text-red-500 m-4 px-4 rounded-md'>
                                    {a[1]}
                                </div>;
                        break;
                    case "보통":
                        state=<div className='text-slate-500 m-4 px-4 rounded-md'>
                                    {a[1]}
                                </div>;
                        break;
                    };
                return <div className={`flex-col grid-rows-${idx} border-2 border-slate-400 p-3 rounded-lg hover:bg-slate-500 `}>
                            <div className='flex justify-center items-center bg-blue-200 p-4 rounded-md'>
                                {a[0]}
                            </div>
                            {state}
                        </div>;
            })
        )
    }

    //component 생성시 처음 한번
    useEffect(()=>{
        //apiKey 확인
        console.log(process.env.REACT_APP_APIKEY);
        //data를 fetch해오는 사용자 정의함수
        getData();
    },[])//[]:dependency array 즉 component array가 비었을시 실행

    useEffect(()=>{
        //undefined는 생성시에도 변화로 인식되어 찍힘
        if(dataF===undefined) return; //그냥 함수에서 빠져나옴
        console.log(dataF);
        let datetm = dtKey.map((k,idx)=>
            <TailBlueButton key={`dt${idx}`} caption ={dataF[k]} handleClick={()=>handleDtClick(idx)}/>//click시 handle에 idx값 보내기
        )//dataF["frcstOneDt"]: dictionary, key값을 넣을시 value가 나옴
        setDT(
            datetm
        )
    },[dataF])
  return (
    dataF&& //&&앞이 false면 안찍힘
    <div className='flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto'>
        <div className='flex justify-center items-center text-white h-20 mb-10'>
            <Tailh1 title="초미세먼지"/>
        </div>
        <div className='grow flex flex-col justify-top'>
            {/* <div>{dataF.frcstOneDt}</div> */}
            <div className="flex justify-center items-center">
                {dt}
                </div>
            <div className="flex w-full justify-center items-center">
                <div className='grid grid-cols-4  gap-4 '>
                    {cn}
                </div>
            </div>
        </div>
    </div>
  
    
  )
}
