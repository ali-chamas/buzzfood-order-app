'use client'
import React from 'react'
import { MenuType } from '@/types/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const EditMenu = ({items}:{items:MenuType}) => {
    const pathname=usePathname()
  return (
    <div className='h-[calc(100vh)] flex flex-col md:flex-row justify-center items-center p-16 md:px-20 lg:h-[calc(100vh-80px)] '>
       {items&& items.map((category)=>(
        
        <Link href={`http://localhost:3000/${pathname}/${category.slug}`} key={category.id} className='w-full h-1/3 bg-cover md:h-[350px] p-5 hover:opacity-90 hover:-translate-y-5' style={{backgroundImage:`url(${category.img})`,backgroundPosition:'center'}}>
          <div className={`text-${category.color} w-1/2`}>
            <h1 className=' uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-4 font-bold'>{category.desc}</p>
            
          </div>
        </Link>
      ))}
    </div>
  )
}

export default EditMenu
