
import EditMenu from '@/components/adminBackup/EditMenu'
import {  MenuType } from '@/types/types'
import Link from 'next/link'
import React from 'react'



const getData = async ()=>{

  
  const res = await fetch("http://localhost:3000/api/categories",{
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
     <EditMenu items={menu} />
    </div>
  )
}

export default Edit
