import React, { useEffect, useRef, useState } from 'react';
import Tailh1 from '../UI/Tailh1'
import TailSelect from '../UI/TailSelect';
import j from './getxy.json';
import { Option, Select } from '@material-tailwind/react';
import TailCard from '../UI/TailCard';

export default function Fcst() {
    //State남용 금지 cate는 바뀌지 않으니 useState가 필요없다
    const cate=j.map(f=>f['1단계']);
    const [selected, setSelected] = useState(); 
    const [options, setOptions] = useState(); 
    const cRef = useRef();
  

    const handleSelCate = ()=>{
        if(cate===undefined) return;
        let tm = j.filter((f,idx)=>f['1단계']===cRef.current.value);
        tm = tm.map((f,idx)=><TailCard  k={`f${idx}`}
                                        theme={'white'}
                                        title= {f["1단계"]}
                                        subtitle={f["2단계"]}
                                        by={f["경도"]+f["위도"]}
                                        />);
        console.log(tm);
        setSelected(tm);
    }
  return (
    <div>
        <div>
            <Tailh1 title="단기예보 선택"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input type='date'></input>
            <div className="w-80">
                {/* <select label="Select Version"
                        onChange={handleSelCate}
                        ref = {cRef}
                >
                <option>--선택--</option>
                {options}
                </select> */}
                <TailSelect opItems={cate} rf={cRef} handleChange={handleSelCate} init="--선택--"/>
            </div>
            <div>
                {selected}
            </div>
        </div>
    </div>
  )
}
