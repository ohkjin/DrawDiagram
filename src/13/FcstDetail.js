import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import getxy from "./getxy.json"

export default function FcstDetail() {
    const [tdata, settdata] = useState([]);
    const [tag, setTag] = useState([]);
    const [sParams] = useSearchParams();
    const term = sParams.get('term');
    const dt = sParams.get('dt');
    const area = sParams.get('area');

    //환경변수
    const apikey = process.env.REACT_APP_APIKEY;
    //좌표
    let tm = getxy.filter(item=>item['1단계']===area)
    // console.log(tm);
    let x = tm[0]["격자 X"];
    let y = tm[0]["격자 Y"];

    const fetchData=async(url)=>{
        const resp = await fetch(url);
        const data = await resp.json();
        let tm = data.response.body.items.item;
        console.log(tm);
        settdata(tm);
    }

    useEffect(()=>{
        let url="https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/"
        url+= term===1?'getUltraSrtFcst':'getVilageFcst'
        url+=`?serviceKey=${apikey}&pageNo=1&numOfRows=60&dataType=json`;
        url+=`&base_date=${dt}`
        url+=`&base_time=`+term===1?'0630':'0500'
        url+=`&nx=${x}&ny=${y}`
        
        fetchData(url);
    },[])

    useEffect(()=>{
        let tm = tdata.map((t,idx)=><div key={idx}>{t.category}</div>)
        // console.log(tm);
        setTag(tm);
    },[tdata])
    
    
    /*
    초단기
    https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=W4298Kl3xl0gOfyeKSAkiQQObfABjtbHzbcmfAuJAhKztl9AzOAGLFDS2xyrwq4xA%2B53iQM0jx8vzT28xfYdVg%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20231226&base_time=0630&nx=55&ny=127
    단기
    https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=W4298Kl3xl0gOfyeKSAkiQQObfABjtbHzbcmfAuJAhKztl9AzOAGLFDS2xyrwq4xA%2B53iQM0jx8vzT28xfYdVg%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20231226&base_time=0500&nx=55&ny=127
    */

  return (
    <div className='container mx-auto w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full my-8'>
            <div>
                {term}
                {dt}
                {area}
                {tag}
            </div>
        </div>
    </div>
  )
}
