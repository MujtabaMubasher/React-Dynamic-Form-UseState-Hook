import React from 'react'
import { FaRegMessage } from "react-icons/fa6";

function Button() {
  return (
    <div className='bg-black w-36 p-2'>
        <span className='flex gap-1'>
        <FaRegMessage className='text-white' />
        <p className='text-xs text-white'>VIA SUPPORT CHAT</p>
        </span>  
    </div>
  )
}

export default Button