import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import CartIcons from './CartIcons'


const Navbar = () => {
  
  return (
    <div className='flex justify-between items-center p-5 border border-yellow-400 md:justify-evenly'>
      <div className='hidden md:flex gap-4 text-xl text-yellow-900 '>
      <Link href={'/'} className='hover:opacity-70 transition '>Home</Link>
        <Link href={'/menu'} className='hover:opacity-70 transition '>Menu</Link>
        
        <Link href={'/about'} className='hover:opacity-70 transition'>About</Link>
      </div>
      <div>
<Link href='/' className='text-3xl font-bold'><span className='text-green-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Bu</span><span className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>zzf</span><span className='text-red-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>ood</span></Link>
      </div>
      <div className='hidden md:flex justify-center items-center gap-4'>
        <div className='flex justify-center bg-yellow-700 text-white p-2 rounded-3xl'>
          <Image src='/phone.png' alt='' width={25} height={25}/>
          <span>1224</span>
          
        </div>
        
       <CartIcons/>
        
      </div>
      <div className='md:hidden'>
        <Menu/>
      </div>
      
    </div>
  )
}

export default Navbar
