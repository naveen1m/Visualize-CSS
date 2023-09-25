import React from 'react';
import { Carousel } from 'flowbite-react';

export default function Carousel_slide() {
  return (
    <div className=' -z-10  h-[80%] mt-4 mx-8 '    >
      <Carousel
        leftControl=""
        rightControl=""
      >


        <div className="relative h-[80%] mt-4 mx-8">
      <div className="absolute inset-0 bg-cover bg-center"
       style={{
       backgroundImage: 'url("https://www.atatus.com/blog/content/images/2022/10/svg-animation-with-css.gif")',
       }}
       ></div>
        <div className="absolute inset-0 flex flex-col text-black text-2xl">
         <div className='text-center'>Welcome to <span className="text-red-500">VisualizeCss !!</span></div>
         <div className=' w-full px-8'>Our website offers <span className="text-red-500"> interactive </span> tutorials that use <span className="text-red-500">images</span> and <span className="text-red-500">animations </span>to simplify complex CSS concepts. </div>
         <div  className=' w-full px-8'>You'll be able to grasp the principles of CSS through hands-on examples.</div>
      </div>
      </div> 



        <div className="relative h-[80%] mt-4 mx-8">
        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage: 'url("https://res.cloudinary.com/practicaldev/image/fetch/s--SLsNZ1l7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_66,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8pegf93lrj9imvgqm4nd.gif")',
        }}></div>
       <div className="relative flex flex-col  h-full text-teal-500 text-2xl">
        <div className=' w-full px-8'>We believe in the power of <span className="text-red-500"> visual learning </span></div>
         <div className=' w-full px-8'>You will learn how to set <span className="text-red-500"> dark </span>mode and various things </div>
         <div className=' w-full px-8'>You'll see how CSS properties affect elements on the screen in real-time.</div>
        </div>
        </div>

        

     
      <div className="relative h-[80%] mt-4 mx-8">
      <div className="absolute inset-0 bg-cover bg-center"
       style={{
       backgroundImage: 'url("https://res.cloudinary.com/practicaldev/image/fetch/s--B8PTm6q9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.ibb.co/YPwRgVW/5-transition.gif")',
       }}
       ></div>
        <div className="absolute inset-0 flex flex-col  text-black text-2xl ">
        <div className=' w-full px-8'> Dive deep into <span className="text-red-500">CSS transitions  </span> and <span className="text-red-500">transformations. </span> </div>
       <div className=' w-full px-8'>Our tutorials show you how to add smooth  <span className="text-red-500"> transitions</span> and<span className="text-red-500"> 3D effects</span> to your web elements.</div>
        
      </div>
      </div> 



      <div className="relative h-[80%] mt-4 mx-8">
      <div className="absolute inset-0 bg-cover bg-center"
       style={{
       backgroundImage: 'url("https://media.geeksforgeeks.org/wp-content/uploads/20200611112211/cssPulse.gif")',
       }}
       ></div>
      <div className="absolute inset-0 flex flex-col  text-gray-500 text-2xl text-bold">
      <div className=' w-full px-8 py-2'>
      Learn how to create <span className="text-teal-500">stunning animations using CSS</span> </div>
         <div  className=' w-full px-8'>Our tutorials break down the steps and provide visual <span className="text-teal-500">representations of each animation technique.</span> </div>
         <div  className=' w-full px-8'> You'll be creating<span className="text-teal-500"> animations like a pro </span> in no time.</div>
      </div>
      </div> 



        
        
      </Carousel>

    </div>
  )
}


