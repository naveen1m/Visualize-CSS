import React from 'react'
import {Floatprop, Clearprop} from "../../components";
const Float = () => {
  return (
   <>
{/* <h1 className='text-3xl tracking-wider text-white bg-violet-400 pl-4 font-bold ml-12 mt-8'>Float Selector</h1>
<div>
<h1 className='font-serif tracking-wider text-black  pl-4 font-bold  ml-12 mt-12'>Float</h1>
<p className=' text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4'>The <span className='text-red-500'>Float</span> property specifies whether an element should float to the left, right, or not at all.</p>
<p className=' text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4'>Absolutely positioned elements ignore the <span className='text-red-500'>Float</span> property.</p>
<p className=' text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4'> Elements next to a floating element will flow around it. To avoid this, use the <span className='text-red-500 underline'>clear</span> property </p>
</div>
    <Floatprop /> */}




<h1 className='tracking-wider text-3xl text-white bg-violet-400 pl-4 font-bold  ml-12 mt-12'>Clear Selector</h1>
    <Clearprop />
   </>
  )
}

export default Float