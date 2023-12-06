import React from 'react'

export default function TailTable(item) {
  return (
    <tr key = {item.key} className="hover:bg-orange-300 hover:text-blue-400 hover:font-extrabold">
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
            : (parseInt(item.rankInten)<0)?
            <span className='text-blue-600'>▼{item.rankInten}</span>
            :<span className='text-slate-500'>-</span>}
            </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="url" className="text-blue-600 dark:text-blue-500 hover:underline">Link</a>
            </td>
      </tr>
  )
}
