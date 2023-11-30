import React, { useState,useEffect } from 'react';
import {BiCameraMovie} from "react-icons/bi";
import Tailh1 from '../UI/Tailh1';

function BoxOffice() {
    const [trs, setTrs] = useState();
    const [boxlist, setBoxlist] = useState();//초기값 필요
  
    useEffect(() => {
      //환경 변수 가져오기 => .gitignore에서 .env 하면 정보 노출 x, .env에서 REACT_APP_ 이름 설정하기
      let apikey = process.env.REACT_APP_BOXOFFICE;
      let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
      url += `key=${apikey}`
      url += `&targetDt=20231128`;
  
      console.log(url);
  
      fetch(url)
      .then(resp => resp.json())
      .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
  
  
    }, []);
  
    // boxlist 변경 시 실행
    useEffect(() => {
      console.log("boxlist", boxlist);
      (boxlist===undefined)?
      setTrs(<tr key = {0} className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="p-4 w-4">
            <div className="flex items-center">
                <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
            </div>
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline"></a>
            </td>
      </tr>)
      :setTrs(boxlist.map((item)=>
      <tr key = {item.movieCd} className="hover:bg-orange-300 hover:text-blue-400 hover:font-extrabold">
        <td className="p-4 w-4">
            <div className="flex items-center">
                <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
            </div>
        </td>
        <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-white">
            <span className="inline-flex justify-center items-center w-5 h-5 m-2 bg-slate-500 text-white rounded-md">
                {item.rank}
            </span>
            {item.movieNm}
        </td>
        <td className="py-4 px-6 text-sm  text-gray-500 whitespace-nowrap dark:text-white">
            {parseInt(item.salesAcc).toLocaleString('ko-KR')}원
        </td>
        <td className="py-4 px-6 text-sm  text-gray-500 whitespace-nowrap dark:text-white">
            {parseInt(item.audiCnt).toLocaleString('ko-KR')}명
        </td>
        <td className="py-4 px-6 text-sm  text-gray-900 whitespace-nowrap dark:text-white">
            {(parseInt(item.rankInten)>0)?
            <span className='text-red-600'>▲{item.rankInten}</span>
            : <span className='text-blue-600'>▼{item.rankInten}</span>}
            </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
      </tr>
      )
      )
    }, [boxlist]);


    return (
        <div className='container mx-auto  h-screen overflow-y-scroll'>
            <div className='flex flex-col justify-center items-center h-full'>
                {/* 3/4: 75% */}
                <div className=" mx-auto">
                    <div className="flex flew-row justify-center items-center mb-5">
                        <BiCameraMovie className="text-4xl text-sky-500 mr-5"/>
                        <Tailh1 title="박스오피스"/>
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
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                        </input><label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Imac 27"</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$1999</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                </td>
                                            </tr>
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