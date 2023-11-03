
import EditMenu from '@/components/adminBackup/EditMenu'
import {  MenuType } from '@/types/types'
import Link from 'next/link'
import React from 'react'



const getData = async ()=>{

  
  const res = await fetch(`${process.env.API_URL}/api/categories`,{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}


const Edit = async() => {
  const menu:MenuType = await getData()
 
  
  
  return (
    <div >
      <div className='bg-red-500 w-full h-8 text-white flex items-center justify-center py-5'>Admins Dashboard</div>
     <EditMenu items={menu} />
    </div>
  )
}

export default Edit
