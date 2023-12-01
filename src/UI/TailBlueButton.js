import React from 'react'

export default function TailBlueButton({caption,handleClick}) {
  return (
    <button onClick={handleClick} className='inline-flex justify-center items-center w-36 h-10 rounded-md m-1 bg-blue-300 text-white hover:bg-blue-800 '>
        {caption}
    </button>
  )
}
