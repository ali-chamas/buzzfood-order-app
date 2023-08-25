'use client'
import React, { useState } from 'react'
import {  ProductType } from '@/types/types'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const CategoryDisplay = ({products}:{products:ProductType[]}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    
     
    const deleteProd=async(id:string)=>{
        

        const res=await fetch(`http://localhost:3000/api/products/${id}`,{method:'DELETE'})
        if( res.status===200){
            console.log('deleted')
            window.location.reload()
            setOpen(false)
        }
        else{
            const data=await res.json()
            console.log(data.message)
        }
}
    
  return (
    <div className="flex flex-wrap text-yellow-500">
      
     
      {products.map((item) => (
        
        <div className="w-full h-[40vh] border-r-2 border-b-2 border-yellow-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50 "
        key={item.id} 
          >
            <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delet this product?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Note that the product will be permanetly deleted
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>deleteProd(item.id)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
            <button className=' hover:opacity-80 cursor-pointer text-white font-bold bg-red-600 rounded-full w-8 h-8 ' type='button' onClick={handleClickOpen}>X</button>
          {item.img && (
            <div className="relative h-[70%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}

          
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-evenly font-bold w-full gap-4">
            <h1 className="text-l uppercase p-2 text-yellow-800">{item.title}</h1>
            {item.options?.map((option)=>(
                <div className='flex flex-col text-xs ' key={option.title}>
                <h3>{option.title}</h3>
                <h4>{option.additionalPrice}</h4>
                
                </div>
            ))}
            <h2 className=" text-l text-red-600">${item.price}</h2>
           
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default CategoryDisplay
