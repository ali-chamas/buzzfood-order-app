import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (

    <div className='flex flex-col gap-5 border bg-yellow-500 border-yellow-400 items-center '>
    <div className='flex justify-between items-center p-5  gap-20'>
      <div className='text-2xl  font-bold'>
      <span className='text-green-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Bu</span><span className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>zzf</span><span className='text-red-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>ood</span>
      </div>
      <div className='flex flex-col gap-4 items-center justify-center text-white'>
       
        <p className='hover:opacity-70 cursor-pointer'>buzzfood@hotmail.com</p>
        
      </div>
    </div>
    <p className='text-white font-bold'>© buzzfood all rights reseved</p>
    </div>
  )
}

export default Footer
