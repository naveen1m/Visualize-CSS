import React from 'react';
import { Carousel } from 'flowbite-react';

export default function Carousel_slide() {
  return (
    <div className='border-2  h-[80%] mt-4 mx-8 '    >
    <Carousel
      leftControl=""
      rightControl=""
    >
<div className="flex h-full items-center justify-center bg-[url('https://shorturl.at/oqFPU')] dark:bg-gray-700 text-white text-3xl">
       Welcome to  VisualizeCss!!
       Let's Visualize css
      </div>
      

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


