'use client'
import React, { useState } from 'react'
import Add from './Add'

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
    else if(offer){
  router.push(`http://localhost:3000//${pathname}/offer`)}

  return (

    <div>

      {add ?
      
    <div className='h-screen p-5 flex flex-col gap-5 sticky'>
        <button className='text-2xl' onClick={()=>setAdd(false)}> <BiArrowBack/></button>
        <Add/>
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

