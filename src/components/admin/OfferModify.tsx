'use client'
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const deletOffer=async()=>{
    const data = await fetch(`${process.env.API_URL}/api/offer`,{method:'DELETE'}
    

    )

    if(!data.ok){
        throw new Error('failed')
    }
    window.location.reload()
    return data.json()
}


const OfferModify = () => {
    const [open,setOpen]=useState(false)
    const [message,setMessage]=useState
    ('')

    const addOffer=async()=>{

           
            
        try{
        const res = await fetch(`${process.env.API_URL}/api/offer`, {
      method: "POST",
      body: JSON.stringify({
         message:message
      }),
    });

    toast.success('Product created!')
    const data = await res.json();
    window.location.reload()
    
   
  } catch (err) {
    console.log(err);
  }
    }


   
  return (

    <div className='flex flex-col gap-5 items-center'>
    <div className='mt-40 flex gap-5 items-center'>
        <ToastContainer/>
      <button className='text-white bg-yellow-600 rounded-md p-2'
      type='button'
      onClick={()=>setOpen(!open)}>
        Add new offer
      </button>
      <button className='text-white bg-red-600 rounded-md p-2'
      type='button'
      onClick={deletOffer}
      >
        Delete offer
      </button>
      </div>
      {open&&
      (
        <div className='flex gap-5'>
            <input type="text" onChange={(e)=>setMessage(e.target.value)} className='border border-gray-400'/>
            <button type='button' 
            onClick={addOffer} className='bg-yellow-500 text-white rounded-md p-2'>Add</button>
        </div>
      )
      }
    
    </div>
  )
}

export default OfferModify
