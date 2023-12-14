import React, { useEffect, useState } from 'react'
import TailBlueButton from '../UI/TailBlueButton'

export default function TrafficNav({title,carr,sel,setSel}) {
    const handleBtClick=(item)=>{
        console.log(item);
        setSel(item);
       
    }
    const c1tags=carr.map((c,idx)=><TailBlueButton caption={c}
                                                 key = {`bt${idx}`}
                                                 bColor={c==sel? 'beige':'darkblue'}
                                                 handleClick={()=>handleBtClick(c)}/>)
  return (
    <div className='flex w-full bg-slate-100 p-3'>
        <div className='flex justify-center items-center text-xl w-1/6'>
            {title}
        </div>
        <div className='flex justify-end items-center w-5/6'>
            {c1tags}
        </div>
    </div> 
  )
}
