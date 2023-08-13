'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcons from './CartIcons'

const Menu = () => {
    const [open ,setOpen] = useState(true)
    const Links=[
        {id:1,title:'HomePage',url:'/'},
        {id:2,title:'Menu',url:'/menu'},
        {id:3,title:'About',url:'/about'},
        
    ]
    //temp
    const user=false;
  return (
    <div className='text-2xl'>
        {open ?(
        
        <Image src='/open.png' width={30} height={30} alt='' className='cursor-pointer  ' onClick={()=>setOpen(false)}/>
        ):(
        <Image src='/close.png' width={25} height={20} alt='' className='cursor-pointer ' onClick={()=>setOpen(true)}/>

        
        )
        }
        {!open && 
        
        <div className='bg-yellow-500 text-white h-[calc(100vh-7.7rem)] absolute left-0 w-screen my-6 flex flex-col justify-center items-center gap-6 z-50'>
            {Links.map((item)=>(
                <Link href={item.url} key={item.id} onClick={()=>setOpen(true)}>{item.title}</Link>
            ))}
            {user ?
            <Link href={'/orders'} onClick={()=>setOpen(true)}>Orders</Link>
            :
            <Link href={'/login'} onClick={()=>setOpen(true)}>Login</Link>
            }
            <button onClick={()=>setOpen(true)}><CartIcons /></button>
            
            <div className='flex justify-center bg-yellow-700 text-white p-2 rounded-3xl'>
          <Image src='/phone.png' alt='' width={25} height={25}/>
          <span className=' font-bold mx-1'>1224</span>
        </div>
        </div> 
        
}
    </div>
  )
}

export default Menu
