'use client'
import React, { useState } from 'react'
import Add from './Add'
import Edit from'./Edit'
import OfferManagement from './OfferManagement'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Dashboard = () => {
    const [ add,setAdd]=useState(false)
    const [ edit,setEdit]=useState(false)
    const [ offer,setOffer]=useState(false)
    const router = useRouter()
    const pathname=usePathname()

    if(edit) router.push(`http://localhost:3000/${pathname}/edit`)

  return (

    <div>

      {add ?
      
    <div className='h-screen p-5 flex flex-col gap-5 sticky'>
        <button className='text-2xl' onClick={()=>setAdd(false)}> <BiArrowBack/></button>
        <Add/>
    </div>
    : 

    offer ?  <div className='h-[80vh] p-5 flex flex-col gap-5'>
    <button className='text-2xl' onClick={()=>setOffer(false)}> <BiArrowBack/></button>
    <OfferManagement/>
</div>
:
    
    <div className='flex flex-col justify-center items-center gap-8  md:flex-row h-[80vh]'>

        
        <button className='border p-4 rounded-md' onClick={()=>setAdd(true)}>add product</button>

        
        
        <button className='border p-4 rounded-md' onClick={()=>setEdit(true)}>edit or delete a produt</button>

        <button className='border p-4 rounded-md' onClick={()=>setOffer(true)}>Manage Offers</button>
      
    </div>}
    </div>
  )
}

export default Dashboard

