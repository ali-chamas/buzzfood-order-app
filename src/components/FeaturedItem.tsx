import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const FeaturedItem = () => {
  return (
    <div className='w-full overflow-x-scroll flex  items-center featured_container '>


      <div className='w-max flex '>


        {
          
          featuredProducts.map((item)=>(
          <div key={item.id} className='w-screen flex flex-col border md:w-[40vw]   items-center gap-5 text-center p-6 hover:bg-amber-50 transition-all duration-300 whatever'>

          <div>
          <Image src={item.img} alt='' width={250} height={250} className='hover:rotate-[60deg] transition-all duration-500'/>
          </div>


          <div className='flex flex-col justify-center gap-5 items-center'>
        <h1 className='text-2xl font-bold text-yellow-600'>{item.title}</h1>
        <p className=' text-yellow-600'>
          {item.desc}
        </p>
        <span className='text-yellow-500 font-bold text-lg'>{item.price}$</span>
        <button type='button' className='bg-yellow-400 text-white p-2 rounded-3xl hover:opacity-80'>Add to cart</button>
        </div>


      </div>
          ))
      }


      </div> 


      </div>
  )
}

export default FeaturedItem
