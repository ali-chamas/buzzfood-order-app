import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    
      <div className="bg-black h-screen flex flex-col md:flex-row p-2 md:h-[500px] md:justify-between md:bg-[url('/offerBg.png')]">

        <div className='flex-1 flex flex-col justify-center items-center  gap-5 p-6 '>

          <h1 className='text-white text-5xl font-bold text-center my-5 md:text-6xl'>Delicious Lebanese Burger Combo!</h1>


          
          <p  className='text-center  text-yellow-200 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium accusamus aliquam labore earum ipsam minus reiciendis et sint</p>

          <span className='text-yellow-100 font-bold'>10.25$ Only!</span>

          <button className='  p-2 rounded-3xl text-white bg-yellow-600 hover:opacity-80 '>
            Order Now
          </button>
            <span className='text-yellow-100 font-bold'>till 08/20/2023</span>
        
        </div>
        <div className=' flex-1 w-full object-contain relative md:h-[400px] md:my-5'>
          <Image src='/offerProduct.png' alt='' fill/>
        </div>
      </div>
   
  )
}

export default Offer
