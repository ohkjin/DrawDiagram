import React, { useState, useRef } from 'react'
import TailBlueButton from '../UI/TailBlueButton'
import Tailh1 from '../UI/Tailh1'
import TailInputNum from '../UI/TailInputNum';
function RefTest() {
    let cnt=0;
    const [stCnt, setStCnt]= useState(0);
    const rfCnt = useRef(0);
    const rfNum1 = useRef();
    const rfNum2 = useRef();
    const rfNum3 = useRef();
    // State변수는 변형시 바로 변형 Ref변수는 증가는 되지만 반영은 되지 않음
    // 대신 화면이 useState에 의해 다시 rendering 될때 반영이됨
    const handleCntUp = ()=>{
        cnt+=1;
        console.log(cnt);
    }

    const handleStCntUp = ()=>{
        setStCnt(stCnt+1)
        console.log(stCnt);
    }

    const handleRfCntUp = ()=>{
        rfCnt.current += 1;
        console.log(rfCnt.current);
    }
    
    const handleSum =()=>{
        let n1 = parseInt(rfNum1.current.value);
        let n2 = parseInt(rfNum2.current.value);
        rfNum3.current.value = n1 +n2;
    }
    return(
        <div className='flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto'>
            <div className='flex justify-center items-center text-white h-20 mb-10'>
                <Tailh1 title={"useRef Hook"}/>
            </div>
            <div className='flex justify-center items-center'>
                <div>cnt={cnt}</div>
                <div><TailBlueButton caption = {'증가'} handleClick={handleCntUp}/></div>
            </div>
            <div className='flex justify-center items-center'>
                <div>stCnt={stCnt}</div>
                <div><TailBlueButton caption = {'증가'} handleClick={handleStCntUp}/></div>
            </div>
            <div className='flex justify-center items-center'>
                <div>rfCnt={rfCnt.current}</div>
                <div><TailBlueButton caption = {'증가'} handleClick={handleRfCntUp}/></div>
            </div>
            <div className='flex justify-center items-center'>
                <div><TailInputNum id ={'num1'} name={'num1'} rf={rfNum1} rq ro={false}/></div>
                <div>+</div>
                <div><TailInputNum id ={'num2'} name={'num2'} rf={rfNum2} rq ro={false}/></div>
                <div><TailBlueButton caption={'='} handleClick={handleSum}/></div>
                <div><TailInputNum id ={'num3'} name={'num3'} rf={rfNum3} ro={true}/></div>
            </div>
        </div>
    )
}

export default RefTest;
