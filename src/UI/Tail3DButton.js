import React from 'react'

export default function Tail3DButton({caption,handleClick,bColor}) {
  const TailColor = {//dictionary=>Object in JS
    'blue':  ['text-white','bg-blue-500 border-blue-700 hover:bg-blue-400 hover:border-blue-500',],
    'beige': ['text-orange-600','bg-orange-100 border-orange-200 hover:bg-orange-50 hover:border-orange-100'],
    'rose':  ['text-slate-100','bg-rose-500 border-rose-700 hover:bg-rose-400 hover:border-rose-600'],
  }
  return (
    <button onClick={handleClick} 
            className={`inline-flex justify-center items-center w-36 h-10 rounded py-2 px-4 m-1
                        ${TailColor[bColor][1]}
                        border-b-4 hover:border-b-0 hover:border-t-4
                        shadow
                        ${TailColor[bColor][0]} font-bold`}>
                     
        {caption}
    </button>
  )
}