export default function TailElevatedBt({caption,handleClick,bColor}) {
    const TailColor = {//dictionary=>Object in JS
      'white': ['text-gray-700','bg-white hover:bg-gray-100 border-gray-400',],
      'black': ['text-gray-300 hover:text-gray-500','bg-gray-900 hover:bg-gray-800 border-gray-400'],
      'rose':  ['text-slate-100','bg-white hover:bg-gray-100 border-gray-400'],
    }
    return (
      <button onClick={handleClick} 
              className={`m-2 py-2 px-4 
                          border 
                          rounded shadow
                          ${TailColor[bColor][1]}
                          ${TailColor[bColor][0]} font-semibold`}>
                       
          {caption}
      </button>
    )
  }