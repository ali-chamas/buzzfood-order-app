'use client'
import { AdminTypes } from '@/types/types'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const Login = ({admin}:{admin:AdminTypes[]}) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const [loggedIn,setLoggedIn]=useState(false)
    
  const router = useRouter();

 
    const handleLogin=()=>{
      if(username && password){
        admin.map((admins)=>
          {
          if(username===admins.username && password === admins.password){
            
         router.push(
          
            `/dashboard/${admins.id}`
         )
          }
          else setError(true)
      })
     
    }
     else setError(true)
    }
    
  return (
    <div className='flex justify-center items-center h-screen '>
      {!loggedIn && 
      <form className='flex flex-col gap-5 p-5 m-5 border border-yellow-700 font-bold text-green-700 ' >
        <h1 className='text-4xl text-red-500 mb-8'>Welcome Admin!</h1>

        <label htmlFor="">Username</label>
        <input type="text" className='p-2 border border-red-500' onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor="">Password</label>
        <input type="password" className='p-2 border border-red-500' onChange={(e)=>setPassword(e.target.value)}/>
        <button className='p-2 bg-yellow-500 text-white rounded-md my-4' type='button' onClick={handleLogin}> Login</button>

          

        {error &&
        <p className='text-red-500 '>wrong username or password</p>

        }
      </form>
     
      }
    </div>
  )
}

export default Login
