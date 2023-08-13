'use client'
import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Link from 'next/link';



const slides =[
    {id:1,title:'always fresh & always crispy & always hot!',image:'/slide2.png'},
    {id:2,title:'we deliver your order wherever whenever',image:'/slide3.jpg'},
    {id:3,title:'Share your food with family and friends!',image:'/slide1.png'}
]
const slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  

  return (
    <div className='max-w-[1400px] h-[715px] w-full  relative group mb-8 lg:h-[680px] '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image}) `,backgroundBlendMode:'multiply',backgroundColor:'gray',
        
        
      }}

        className='w-full h-full bg-cover bg-center  duration-500 flex justify-center items-center '
      >
        <div className='text-center flex flex-col gap-5 items-center '>
        <h1 className='text-yellow-100 font-bold text-5xl text-center '>{slides[currentIndex].title}
        </h1>
        <Link href='/menu'>
        <button type='button' className='bg-yellow-600 text-white font-bold p-3 rounded-3xl hover:opacity-80'>view menu</button>
        </Link>
        </div>
      </div>
      
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default slider
