import React from 'react'

export default function TailMessage({msg}) {
  return (
    <div class="message-area mt-4 px-4">
        <div class="relative receive-chat flex justify-center">
        <div class="px-5 mb-2 bg-orange-300 text-white py-2 text-sm max-w-[80%] rounded font-light">
            <i class="fa fa-caret-up text-orange-300 -top-2 absolute" ></i>
            <p>
            {msg}
            </p>
        </div>
        </div>
    </div>
  )
}
