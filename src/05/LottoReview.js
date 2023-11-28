import React from 'react';
import LogoP from '../01/LogoP';
import style from './LottoStyle.module.css';
import { useState, useEffect } from 'react';

export default function LottoReview() {
    // 함수의 body
    //let tags = "Lotto번호 생성기";
    const [tags,setTags] = useState();
    const handleClick=(e)=>{
        e.preventDefault();
        let arr = [];
        while(arr.length<7){
            let snum = Math.floor(Math.random()*45)+1;
            if(!arr.includes(snum))
                arr.push(snum);
        }
        let spTags;
        arr.splice(6,0,"+");
        spTags=arr.map((it,idx)=>
            (it!=="+")?
            <span key={`LRsp${idx}`} className={style[`sp${Math.floor(parseInt(it)/10)}`]}>{it}</span>
            :<span key={`LRspp`} className={style.spp}>{it}</span>
        )
        setTags(spTags);
    }
    useEffect(()=>{
        setTags(<LogoP msg={"Lotto"}/>) ;
    },[]);//초기값
    
    useEffect(()=>{
    },[tags] //[tags]가 바뀔때마다 변경
    )
    return (
        <>    
        <main className={style.main}>
        <section className={style.sec}>
            <form className={style.form}>
           
                <div id="div1" className = {style.fdiv}>
                <LogoP emoji={"🐋".repeat(5)} />
                    <div id="d1"className={style.div1}>
                        <div>{tags}</div>
                    </div>
                    
                </div>
                <div id="div2" className = {style.fdiv}> 
                    <div id="d2"className={style.div1}>
                        <button id="bt1" className={style.bt} onClick={handleClick}>로또 번호</button>
                    </div> 
                </div>
                <div id="div3" className = {style.fdiv}> 
                    <div><button id="reset" className= {style.reset}>RESET</button></div>                  
                </div>
            </form>
        </section>   
    </main>
    </>
    )
}
