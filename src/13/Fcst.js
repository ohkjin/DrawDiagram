import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TailSelect from '../UI/TailSelect';
import j from './getxy.json';
import TailBlueButton from '../UI/TailBlueButton'
import TailInputDate from '../UI/TailInputDate';

export default function Fcst() {
    //State남용 금지 cate는 바뀌지 않으니 useState가 필요없다
    const cate=j.map(f=>f['1단계']);
    let today = new Date();
    let limit = new Date();
    limit.setDate(today.getDate()-2);
    today = today.toISOString().slice(0,10);
    limit = limit.toISOString().slice(0,10)
    
    const [dt,setDt] = useState('');
    const [area,setArea] = useState('');
    // const [selected, setSelected] = useState('');
    const nagivator = useNavigate();


  
    const handleDt = (e) => {
        e.preventDefault();
        setDt(e.target.value.replaceAll('-',''));
    }
    const handleSelCate = (e)=>{
        e.preventDefault();
        if(cate===undefined) return;
        // let tm = j.filter((f,idx)=>f['1단계']===e.target.value);
        // tm = tm.map((f,idx)=><TailCard  k={`f${idx}`}
        //                                 theme={'white'}
        //                                 title= {f["1단계"]}
        //                                 subtitle={f["2단계"]}
        //                                 by={f["경도"]+f["위도"]}
        //                                 />);
        // console.log(tm);
        // setSelected(tm);
        setArea(e.target.value);
    }

  return (
    <div className='container mx-auto w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full my-8'>
            <form name = "fcstform" className='my-8 w-4/5 flex justify-center items-center'>
                <div className='w-1/2 mx-4'>
                    <TailInputDate name= "inputDate" min={limit} max={today} handleChange={handleDt}/>
                </div>
                <div className='w-1/2 mx-4'>
                    <TailSelect opItems={cate}  handleChange={handleSelCate} init="--지역 선택--"/>
                </div>
            </form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Nagivator: 이벤트 이동법 */}
                {dt&&area&&<TailBlueButton caption= "초단기예보" 
                                bColor="blue"
                                handleClick={()=>nagivator(`/detail?term=${1}&dt=${dt}&area=${area}`)}/>}
                {dt&&area&&<TailBlueButton caption= "단기예보" 
                                bColor="blue"
                                handleClick={()=>nagivator(`/detail?term=${2}&dt=${dt}&area=${area}`)}/>}
            </div>
            <div>
            최근 3일 간의 자료만 제공합니다.
                {/* {selected} */}
            </div>
        </div>
    </div>
  )
}
