import React from 'react';
import { Carousel } from 'flowbite-react';

export default function Carousel_slide() {
  return (
    <div className='  -z-10 h-[80%] mt-4 mx-8 '    >
      <Carousel
        leftControl=""
        rightControl=""
      >
        <section className="flex h-full z-0 items-center justify-center bg-[url('https://shorturl.at/oqFPU')] dark:bg-gray-700 text-white text-3xl">
          <div className='text-center '>
            <p><span className='text-xl'>Bored of Textual learning?</span><br />
              <span className='text-2xl text-blue-400'>Change Style,</span> <span className='text-3xl text-violet-300 font-bold'>VISUALIZE</span>
            </p>
            <button className='text-2xl  my-2 mt-6 p-2 px-6 font-serif bg-blue-500 rounded-md hover:bg-blue-600'>Get Started</button>
          </div>
        </section>


        <img
          alt="..."
          src="https://shorturl.at/dmtRZ"
        />
        <img
          alt="..."
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
        />
        <img
          alt="..."
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
        />
        <img
          alt="..."
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
        />
      </Carousel>

    </div>
  )
}


