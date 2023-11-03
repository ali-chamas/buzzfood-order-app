
import Login from '@/components/admin/Login'
import { AdminTypes } from '@/types/types';
import React from 'react'


const getAdmin = async()=>{
  const res = await fetch(`${process.env.API_URL}/api/managers`,{
    cache:"no-store"
  })

 if(!res.ok){
  throw new Error('failed!')
 }
  return res.json()
}


const DashboardPage = async () => {
 const admin:AdminTypes[] = await getAdmin()
    
  return (
    <div>
      <div className='bg-red-500 w-full h-8 text-white flex items-center justify-center py-5'>Admins Dashboard</div>
      
      <Login admin={admin}/>
    </div>
  )
}

export default DashboardPage
