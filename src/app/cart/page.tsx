import React from 'react'
import Image from 'next/image'
const CartPage = () => {
  return (
    <div className='h-screen md:h-[calc(100vh-8rem)] flex flex-col md:flex-row text-yellow-700  lg:ml-4 '>
      
      <div className='h-1/2 flex flex-col p-4  overflow-scroll md:h-full md:w-2/3 ml-2'>

          <div className='flex items-center justify-between   font-bold mb-4 '>
            <Image src='/temporary/p1.png' alt='' width={100} height={100}/>

            <div className=''>
              <h1 className='text-lg '>Sicillian</h1>
              <span className='uppercase text-sm '>Large</span>
            </div>
            <h2 className='border-b-2 border-yellow-200'>79.98 $</h2>
            <button className='hover:opacity-80 rounded-full w-6 bg-red-500 text-white p-1  text-xs'>X</button>

          </div>
          
          <div className='flex items-center justify-between   font-bold mb-4 '>
            <Image src='/temporary/p1.png' alt='' width={100} height={100}/>

            <div className=''>
              <h1 className='text-xl'>Sicillian</h1>
              <span className='uppercase text-sm '>Large</span>
            </div>
            <h2 className='border-b-2 border-yellow-200 '>79.98 $</h2>
            <button className='hover:opacity-80 rounded-full w-6 bg-red-500 text-white p-1  text-xs'>X</button>

          </div>
          
          <div className='flex items-center justify-between   font-bold mb-4'>
            <Image src='/temporary/p1.png' alt='' width={100} height={100}/>

            <div className=''>
              <h1 className='text-lg '>Sicillian</h1>
              <span className='uppercase text-sm '>Large</span>
            </div>
            <h2 className='border-b-2 border-yellow-200'>79.98 $</h2>
            <button className='hover:opacity-80 rounded-full w-6 bg-red-500 text-white p-1  text-xs'>X</button>

          </div>
          
          


      </div>

      <div className=' h-1/2 p-4 bg-amber-100 md:h-full md:w-1/3 flex flex-col justify-center md:items-center ml-2 ' >

    <div className='flex justify-between mb-4'>
      <span className=''>
        SubTotal (3items)
      </span>
      <span className='text-red-500 '>
        81.57$
      </span>
    </div>
    <div className='flex justify-between mb-4'>
      <span className=''>
        Service Cost 
      </span>
      <span className='text-red-500'>
        0.00$
      </span>
    </div>
    <div className='flex justify-between mb-4'>
      <span className=''>
        Delivery cost 
      </span>
      <span className='text-green-500'>
        Free!
      </span>
    </div>
    
        <hr  className=' mb-5'/>
        <div className='flex justify-between mb-4 font-bold'>
      <span className=''>
        Total Cost (INC. VAT) 
      </span>
      <span className='text-red-500'>
        81.75$
      </span>
      
      

    </div>
    
    <button className='bg-yellow-600 text-white p-3 rounded-md w-1/2 translate-x-[95%] mt-3 hover:opacity-80 
    md:translate-x-[0%] '>Checkout</button>
      </div>

        
      
    </div>
  )
}

export default CartPage
