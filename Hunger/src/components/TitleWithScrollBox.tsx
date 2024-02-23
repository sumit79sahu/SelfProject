import React, { forwardRef } from 'react'
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const TitleWithScrollBox = ({title,slider}:any) => {
  const scrollLeft=()=>
  {
    slider.current.scrollLeft -=420
  }
  const scrollRight=()=>
  {
    slider.current.scrollLeft +=420
  }
  return (
    <div className='flex justify-between pb-4'>
      <div className='font-bold text-lg   sm:text-2xl md:text-3xl'>{title}</div>
      <div className='flex gap-[0.3rem] sm:gap-2 md:gap-3 h-7 sm:h-8 md:h-9'>
        <button className='rounded-full p-[0.45rem] sm:p-[0.5rem] bg-gray-200' onClick={scrollLeft}><ArrowLeftIcon className=" h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-black" /></button>
        <button className='rounded-full p-[0.45rem] sm:p-[0.5rem]  bg-gray-200' onClick={scrollRight}><ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-black" /></button>
      </div>
    </div>
  )
}

export default TitleWithScrollBox
