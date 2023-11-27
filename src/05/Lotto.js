import style from "./Lotto.module.css"
import { useState } from "react"
import "./LottoCSS.css"

export default function Lotto() {
    const [tags,setTags]=useState();

    const handleClick=(e)=>{
        e.preventDefault();
        let arr =[];
        while (arr.length<7){
            let n = Math.floor(Math.random()*45) + 1;//1에서 46까지의 랜덤수
            if(!arr.includes(n)) arr.push(n);
        }

        let spTags;
        spTags=arr.map((it,idx)=>
        idx === 5
        ?
        <>
        <span key={`sp${idx}`} id={`sp${Math.floor(parseInt(it)/10)}`} className="sp">{it}</span>
        <span id="spp" className={style.spp}>+</span>
        </>
        :<>
        <span key={`sp${idx}`} id={`sp${Math.floor(parseInt(it)/10)}`} className="sp">{it}</span>
        </>
        );

        setTags(spTags);
    }
    return(
        <main className={style.main}>
        <section className={style.sec}>
            <form className={style.form}>
                <div id="div1" className = {style.fdiv}>
                    <div id="d1"className={style.div1}>
                        <span>
                            {tags}
                        </span>
                    </div>
                    
                </div>
                <div id="div2" className = {style.fdiv}> 
                    <div id="d2"className={style.div1}>
                        <button id="bt1" className={style.bt} onClick={handleClick}>로또 번호</button>
                    </div> 
                </div>
                <div id="div3" className = {style.fdiv}> 
                 
                    <div><button id="reset" className={style.bt}>RESET</button></div>                  
                </div>
            </form>
        </section>   
    </main>
    )
}