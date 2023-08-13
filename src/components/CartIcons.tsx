'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcons = () => {

  return (
    <div>
      <Link href={'/cart'} className=' flex items-center gap-1 ' >
      <Image src='/cart.png' width={25} height={25} alt=''/>
      <span> Cart (3) </span>
      </Link>
    </div>
  )
}

export default CartIcons
