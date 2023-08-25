'use client'
import React, { useState } from 'react'
import {  ProductType } from '@/types/types'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'




const CategoryDisplay = ({products}:{products:ProductType[]}) => {

    const [confirm,setConfirm]=useState
    (false)
    
     
    const deleteProd=async(id:string)=>{
        

        const res=await fetch(`http://localhost:3000/api/products/${id}`,{method:'DELETE'})
        if( res.status===200){
            console.log('deleted')
            window.location.reload()
        }
        else{
            const data=await res.json()
            console.log(data.message)
        }
}
    const pathname=usePathname()
  return (
    <div className="flex flex-wrap text-yellow-500">

        {confirm && (
            <div className='h-screen w-full bg-transparent z-50 flex items-center justify-center'>
                    <div className='bg-white shadow-xl flex flex-col'>
                            <h1>Are you sure?</h1>
                        <div className='flex gap-5'>
                        <button>Delete</button>
                        <button onClick={()=>setConfirm(false)}>Cancel</button>
                        </div>

                    </div>
            </div>
        )}
        
      {products.map((item) => (
        
        <div className="w-full h-[40vh] border-r-2 border-b-2 border-yellow-500 sm:w-1/4 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
        key={item.id} 
          >
            <button className=' hover:opacity-80 cursor-pointer text-white font-bold bg-red-600 rounded-full w-8 h-8 ' type='button' onClick={()=>setConfirm(true)}>X</button>
          {item.img && (
            <div className="relative h-[70%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}

          
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            {item.options?.map((option)=>(
                <div className='flex flex-col text-xs'>
                <h3>{option.title}</h3>
                <h4>{option.additionalPrice}</h4>
                </div>
            ))}
            <h2 className=" text-xl">${item.price}</h2>
           
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryDisplay
