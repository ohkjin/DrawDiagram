import React, { useState,useEffect,useRef } from 'react';
import {BiCameraMovie} from "react-icons/bi";
import Tailh1 from '../UI/Tailh1';
import TailInputDate from '../UI/TailInputDate';
import TailTable from '../UI/TailTable';

function BoxOffice() {
    const [trs, setTrs] = useState();
    const [boxlist, setBoxlist] = useState();//초기값 필요
    const rfDt = useRef();
    const [max,setMax] = useState();

    const getFetchData = (dt)=>{//날짜 가져오기 dt형식: 20231101
        //환경 변수 가져오기 => .gitignore에서 .env 하면 정보 노출 x, .env에서 REACT_APP_ 이름 설정하기
        let apikey = process.env.REACT_APP_BOXOFFICE;
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
        url += `key=${apikey}`
        url += `&targetDt=${dt}`;

        console.log(url);

        fetch(url)
        .then(resp => resp.json())
        .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err))

    }
  
    useEffect(() => {
    
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    yesterday = yesterday.toISOString().slice(0,10);
    setMax(yesterday);// 형식 2023-02-12
    // let yd = yesterday.getDate();
    // (yd<10)?yd=`0${yd}`:yd=yd;
    // let ym = yesterday.getMonth()+1;
    // (ym<10)?ym=`0${ym}`:ym=ym;
    // let yy = yesterday.getFullYear();
    // date = `${yy}${ym}${yd}`;
    
    console.log(yesterday);
    getFetchData(yesterday.replaceAll("-",""));
  
    }, []);
  
    // boxlist 변경 시 실행
    useEffect(() => {
      console.log("boxlist", boxlist);
      (boxlist===undefined)?
      setTrs(<TailTable key={0} />)
      :setTrs(boxlist.map((item)=>
        <TailTable key={item.movieCd} rank= {item.rank}  movieNm={item.movieNm} 
        salesAcc={item.salesAcc} audiCnt={item.audiCnt} rankInten={item.rankInten}/>
      )
      )
    }, [boxlist]);

  
    const handleDtChange=(e)=>{
        getFetchData(rfDt.current.value.replaceAll("-",""));
        // getFetchData(e.target.value.replaceAll("-",""));
    }

    return (
        <div className='container mx-auto  h-screen overflow-y-scroll'>
            <div className='flex flex-col justify-center items-center h-full'>
                {/* 3/4: 75% */}
                <div className=" mx-auto">
                    <div className="flex flew-row justify-center items-center mb-5">
                        <BiCameraMovie className="text-4xl text-sky-500 mr-5"/>
                        <Tailh1 title="박스오피스"/>
                    </div>
                    <div className="flex flew-col justify-left items-left mb-5 ">
                        <div className='bg-sky-200 rounded-md'>
                            <label htmlFor='inputDt' className=' text-white'>
                                날짜 선택
                            </label>
                        </div>
                        <div>
                            <TailInputDate id = 'inputDt' name = 'inputDt'
                                       dt={max} //초기값
                                       max={max}
                                       rf={rfDt}
                                       handleChange ={handleDtChange}
                                       className='border-cyan-400'/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {/* sm: 화면이 작아졌을시 자동적용 */}
                        <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden ">
                                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                        <thead className="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                {/* p: padding, m: margin */}
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                            </input>
                                                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    영화명
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    매출액
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    관객수
                                                </th>
                                                <th scope="col" className="py-4 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    증감율
                                                </th>
                                                <th scope="col" className="p-4">
                                                    <span className="sr-only">Link</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                            {trs}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxOffice