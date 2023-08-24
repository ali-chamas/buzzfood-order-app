
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


const MenuPage = async() => {
  const menu:MenuType = await getData()

  
  
  return (
    <div className='h-[calc(100vh+150px)] flex flex-col md:flex-row justify-center items-center p-16 md:px-20 lg:h-[calc(100vh-80px)] '>
      {menu.map((category)=>(
        <Link href={`/menu/${category.slug}`} key={category.id} className='w-full h-1/3 bg-cover md:h-[350px] p-5 hover:opacity-90 hover:-translate-y-5' style={{backgroundImage:`url(${category.img})`,backgroundPosition:'center'}}>
          <div className={`text-${category.color} w-1/2`}>
            <h1 className=' uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-4 font-bold'>{category.desc}</p>
            
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage
