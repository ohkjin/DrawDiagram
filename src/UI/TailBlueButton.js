import React from 'react'

export default function TailBlueButton({caption,handleClick,bColor}) {
  const TailColor = {//dictionary=>Object in JS
    'blue': 'bg-blue-300 hover:bg-blue-600  text-white',
    'darkblue': 'bg-blue-900 hover:bg-blue-700  text-white',
    'beige': 'bg-orange-100  hover:bg-orange-50 text-orange-600',
    'orange': 'bg-orange-300  hover:bg-orange-600 text-white',
    'rose': 'bg-rose-300  hover:bg-rose-400 text-white',
  }
  return (
    <button onClick={handleClick} 
            className={`inline-flex justify-center items-center w-36 h-10 rounded-md m-1
                      ${TailColor[bColor]}`}>
        {caption}
    </button>
    // <TailBlueButton caption={'sky'} 
    // bgColor={'sky'}
    // handleClick={()=>handleBtClick('sky')}/>
  )
}
