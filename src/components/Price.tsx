'use client'
import { CartItemType, ProductType } from '@/types/types';
import { useCartStore } from '@/utils/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'


const Price = ({product}:{product:ProductType}) => {

    const [selectedOption,setSelectedOption]=useState(0);
    const [quantity,setQuantity]=useState(1);
    const [ totalPrice,SetTotalPrice]=useState(product.price)

    const {addToCart}=useCartStore()
    
    const handleCart=()=>{
      {
        let newID:string = '';
        if( product.options && product.options[selectedOption].title ==='small'){
            newID=product.id+'s';
        }
        else if( product.options && product.options[selectedOption].title ==='medium'){
          newID=product.id+'m';
      }
      else if( product.options && product.options[selectedOption].title ==='large'){
        newID=product.id+'l';
    }
        addToCart(
        {id: newID,
          title: product.title,
          img: product.img,
          price: totalPrice,
          ...(product.options?.length && {
            optionTitle: product.options[selectedOption].title,
          }),
          quantity: quantity,})
          setQuantity(1)
        toast.success('product added to the cart')
        }
    }

    
    useEffect(() => {
      useCartStore.persist.rehydrate();
    }, []);
  
      useEffect(() => {
        if (product.options?.length) {
          SetTotalPrice(
             quantity*(Number(product.price) + Number(product.options[selectedOption].additionalPrice))
          )
        }
      }, [quantity, selectedOption, totalPrice]);
    const increase=()=>{
        setQuantity(quantity+1);
    }
    const decrease=()=>{
        quantity>1 && setQuantity(quantity-1)
    }

  return (
    
    <div className='flex flex-col gap-8 '>
      
      <h2 className='text-2xl font-bold'>{Number(totalPrice).toFixed(2)}$</h2>

        <div className='flex  gap-6'>
            {product.options?.length && product.options?.map((option,index)=>(
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
                <button type='button' className='bg-yellow-500 p-3  text-white w-full hover:opacity-80   md:min-w-[10rem]' onClick={
        handleCart
        }
                    >Add to cart</button>
                    <ToastContainer/>
                          </div>

                      </div>
                    )
        }

export default Price
