import style from './Like.module.css';
import {useState,useEffect} from 'react';

export default function Like() {
    // let cnt=0;state 변수 써야함 
    const [cnt,setCnt] = useState(0);
    const handleUp =()=>{
        setCnt(cnt+1);
        console.log("UP",cnt);
    }
    const handleDown = ()=>{
        if(cnt!==0)
            setCnt(cnt-1);
        console.log("D",cnt);
    }
    //맨처음 컴포넌트 생성시 한번만 실행됨, 호출하지 않아도 자동 실행되게 해줌
    useEffect(()=>{
        console.log("Like 생성")
    },[]);//useEffect hook...dependency....

    //state변수에 의해 컴포넌트가 업데이트 될떄 실행
    useEffect(()=>{
        console.log("Like 업데이트",cnt);
    },[cnt]);//[cnt]:dependency array
    return (
        <div className={style.likediv}>
            <span onClick={handleUp}>🎇</span>
            {/* state 변수 써야함 */}
            <span min>{cnt}</span>
            <span onClick={()=>handleDown()}>📮</span>
        </div>
    )
}