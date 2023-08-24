

import Image from 'next/image'
import React from 'react'
import {ProductType} from '@/types/types'

import FeaturedRoute from './FeaturedRoute'

const getData = async ()=>{
  
  const res = await fetch("http://localhost:3000/api/products",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

const FeaturedItem = async() => {

  const featuredProducts:ProductType[] =await getData();

  return (
    <div className='w-full overflow-x-scroll flex  items-center featured_container '>


      <div className='w-max flex '>


        {
          
          featuredProducts.map((item)=>(
          <FeaturedRoute item={item}/>
          ))
      }


      </div> 


      </div>
  )
}

export default FeaturedItem
