import React from 'react'

export default function TailInputDate({id,name,rf,ro,rq,min,max,handleChange}) {

  return (
    //input datepicker => need download
    <input type="date" id={id} name={name} min={min} max={max}
           onChange = {handleChange}
           ref={rf}
           readOnly = {ro}
           required = {rq}
           aria-describedby="helper-text-explanation" 
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />           
  )
}

// 13/Fcst