import { useEffect, useRef, useState } from "react";
import Tail3DButton from "../UI/Tail3DButton";
import TailElevatedBt from "../UI/TailElevatedBt";

export default function Ex01() {//App에서 import하기 위해 export
    const arr = ['콜백 함수','보낸 변수를 받음']
    const [tagMsg,setTagMsg] = useState("");
    const inRef = useRef();
    const tagArr = arr.map((a,idx)=> {
        let tm = a.slice(0,5);
        return  <TailElevatedBt key={`eleBt${idx}`} caption={tm} bColor={idx===0?'white':'black'} handleClick={()=>handleMessage(tm)}/>
    });

    const handleClick=()=>{
        alert("변수처럼 쓰이는 함수");
    }
    const handleMessage=(msg)=>{
        setTagMsg(inRef.current.value===""?msg:`${inRef.current.value}님 ${msg}`);
        alert(msg);
    }
    // useState(변수)로 화면이 바뀔때마다 보여줌
    // 비동기로 진행중이여서 useEffect(함수)로 제어 
    useEffect(()=>{},[])
    useEffect(()=>{console.log(tagMsg)},[tagMsg])
    return (
        
        <div className="container mx-auto px-4">
            {/* Fragment tag: BD에 생략되어 나타난다 */}
            <>
                {/* React는 대소문자를 구분한다(ex)h1,H1). 사용자 정의는 대문자 시작 */}
                <h1 className="bg-slate-300 h-10 m-5 p-5 flex justify-center items-center 
                               text-orange-600 text-2xl">리액트</h1>
            </>
            {/* <a>:이동 href: a의 속성 */}
            <>
                {/* 함수가 변수에 저장, 변수처럼 쓰임  */}
                <button onClick={handleClick}>버튼</button><br/>
                {/* 익명함수(변수를 받아서) => 함수 실행(보내는 변수) : 콜백함수(함수를 인수로) */}
                {/* Callback functions are functions that are deployed after the first function completes its task. 
                    They are frequently deployed in scenarios like managing asynchronous actions,  
                    setTimeout(()=>console.log("Callback"),500):waites before calling*/}
                <button onClick={()=>handleMessage(arr[0])}>{arr[0]}</button><br/>
                <button onClick={()=>setTimeout(()=>handleMessage(arr[1]),1000)}>{arr[1]}</button><br/>
            </>
            <div className="flex justify-left items-center w-full">
                <Tail3DButton caption={'3D버튼'} bColor={'blue'}/>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center items-center w-full">
                    <form>
                        <input  type="text" 
                                ref={inRef} 
                                placeholder="입력"
                                className="m-2 py-2 px-4 bg-gray-100 border border-black hover:border-orange-700"/>
                    </form>
                    {tagArr}
                </div>
                <div className="flex justify-center items-center w-full">
                    {tagMsg}
                </div>
            </div>


            <div id="todo">
                <div className="flex flex-row align-items inherit fill: inherit mx-1">
                    <div className="flex: 1 1 0px; min-width: 1px; display: flex; flex-direction: column;">
                        <div className="display: flex;">
                            <div contentEditable="true" id=":r13:"  spellCheck="true" placeholder="To-do" data-content-editable-leaf="true" className="max-width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; text-align: left; flex-grow: 1;">tgth
                            <input aria-labelledby=":r13:" type="checkbox" className="position: absolute; opacity: 0; width: 16px; height: 16px; top: 0px; left: 0px; cursor: pointer; mx-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

