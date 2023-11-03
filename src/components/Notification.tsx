import { OfferType } from '@/types/types'
import React from 'react'


const getOffer=async()=>{
  const data = await fetch(`${process.env.API_URL}/api/offer`)
  if(!data.ok){
    throw new Error('failed')
  }
  return data.json()
}

const Notification = async() => {
  const offer:OfferType[] = await getOffer()
  
  return (

    <>
    {offer[0]?
    <div className='h-4 w-full text-lg font-bold font-mono text-white p-6 bg-yellow-500 flex justify-center items-center   '> 
      {offer[0].message}
    </div>
    :
    <div></div>
}
    </>
  )
}

export default Notification
