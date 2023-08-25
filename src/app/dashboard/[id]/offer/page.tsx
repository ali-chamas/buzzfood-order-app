import OfferModify from '@/components/admin/OfferModify'
import { OfferType } from '@/types/types'
import React from 'react'

const getOffer=async()=>{
  const data = await fetch('http://localhost:3000/api/offer',{cache:'no-cache'})
  if(!data.ok){
    throw new Error('failed')
  }
  return data.json()
}

const OfferManagement =async () => {
  const offer:OfferType[] = await getOffer()
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        
        
        <div className='flex gap-5'>
       <h1 className='text-yellow-600' >current offer message:</h1>

       <span className='text-yellow-700 font-bold'>{offer[0]&&
       offer[0].message
       
       
       }</span>
        </div>

        <div>
            <OfferModify/>
        </div>
    
    </div>
        
  )
}

export default OfferManagement
