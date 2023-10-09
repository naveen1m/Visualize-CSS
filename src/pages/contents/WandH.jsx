import React from 'react';
import { Pixels, Percentage, Em, Keyword} from '../../components';

const WandH = () => {
  

  return (
    <>
   <h1 className='ml-12 mt-7 mr-10 font-serif '>Width And Height Slider :</h1>
   

  
   <div>
   <h2 className='ml-12 mt-7 mr-10 font-serif text-xl '>Through Pixels :</h2>
  <Pixels />
  </div>

  <div className='h-1/2'>
  <h2 className='ml-12 mt-7 mr-10 font-serif text-xl'>Through Percentage :</h2>
  <Percentage />
  </div>

  <div>
  <h2 className='ml-12 mt-7 mr-10 font-serif text-xl'>Through em :</h2>

<Em />
  </div>

  <div className='mt-10'> 
  <h2 className='ml-12 mt-7 mr-10 font-serif text-xl'>Through Keyword Values :</h2>
   <Keyword />
  </div>
  

    </>
  );
};

export default WandH;


