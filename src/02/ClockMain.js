import LogoImg from "../01/LogoImg";
import {useState} from "react";//Class 형 함수에서만 사용가능
function ClockMain(){
    const [curtime,setCurtime] = useState(new Date().toLocaleTimeString());//초기값 잡기

    setInterval(()=>{
        setCurtime(new Date().toLocaleTimeString());
    },1000);
    // let curtime=new Date().toLocaleTimeString();
    return(
        <div className="App-header">
            CLOCK
            <LogoImg/>
            <div>현재시간: {curtime}</div>
            {/* 현재시간:   {new Date().toLocaleTimeString().slice(0,-3)} */}
        </div>
    );
};
export default ClockMain;