import React from 'react'

export default function TailCard({k,imgSrc,title,subtitle,by,tags}) {
  return (
    <div key={k} className="group relative bg-violet-300/10 rounded-lg shadow-xl p-3">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img 
                src={imgSrc} alt={title}
                className="h-full w-full object-cover object-center bg-black bg-blend-multiply lg:h-full lg:w-full"
                />
        </div>
        <div className="mt-4 flex flex-col justify-left">
            <h3 className='bg-sky-200/30 rounded-md text-sm text-gray-200 flex justify-left items-center'>
                {title}
            </h3>
            <p className="mt-1 text-sm text-gray-300">
                {subtitle}
            </p>
            <p className="mt-1 text-xs text-gray-400">
                {by}
            </p>
            <div className='flex justify-center items-center text-grey-50'>
                {tags}
            </div>
        </div>
    </div>
  )
}

    