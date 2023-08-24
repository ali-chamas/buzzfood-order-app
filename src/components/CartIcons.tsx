'use client'
import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const CartIcons = () => {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  
  const {totalItems}=useCartStore();
  return (
    <div>
      <Link href={'/cart'} className=' flex items-center gap-1 ' >
      <Image src='/cart.png' width={25} height={25} alt=''/>
      <span> Cart ({totalItems}) </span>
      </Link>
    </div>
  )
}

export default CartIcons
