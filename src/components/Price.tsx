'use client'
import React, { useEffect, useState } from 'react'

type Props = {
    price:number;
    id:number;
    options?:{title:string;additionalPrice:number}[];

}

const Price = ({price,id,options}:Props) => {

    const [selectedOption,setSelectedOption]=useState(0);
    const [quantity,setQuantity]=useState(1);
    const [ totalPrice,SetTotalPrice]=useState(price)



    useEffect(()=>{
        SetTotalPrice(quantity*(options ? price+options[selectedOption].additionalPrice : price))
    },[quantity,selectedOption,price,options])

    const increase=()=>{
        setQuantity(quantity+1);
    }
    const decrease=()=>{
        quantity>1 && setQuantity(quantity-1)
    }
  return (
    <div className='flex flex-col gap-8 '>
      <h2 className='text-2xl font-bold'>{totalPrice.toFixed(2)}$</h2>

        <div className='flex  gap-6'>
            {options?.map((option,index)=>(
                <button key={option.title} type='button' className='min-w-[6rem] p-3 border border-yellow-500 rounded-md'
                style={{background:selectedOption===index?"#CC9900":"white",color:selectedOption===index?"white":"#CC9900",transition:'0.3s'}}
                onClick={()=>setSelectedOption(index)}
                >{option.title}</button>
            ))}
        </div>
        <div className='flex justify-between items-center border border-yellow-500'>
            <div className='flex justify-between w-full gap-20 p-2'>
                <span>Quantity </span>
                <div className='flex gap-4 items-center '>
                    <button className='hover:opacity-80 text-sm font-bold' 
                    onClick={()=>decrease()}>{'<'}</button>
                    <span className='font-bold max-w-[0.5rem]'>{quantity}</span>
                    <button className='hover:opacity-80 font-bold'
                    onClick={()=>increase()}
                    >{'>'}</button>
                </div>
                </div> 
                <button type='button' className='bg-yellow-500 p-3  text-white w-full hover:opacity-80  md:max-w-[10rem]'>Add to cart</button>
        </div>

    </div>
  )
}

export default Price
