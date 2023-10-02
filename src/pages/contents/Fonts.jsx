import React, { Fragment } from 'react';
import {FontFamily,FontSText,SizeSlider,FontWeight,Style_Font,TextDecoration} from '../../components';

function Fonts() {

  return (
    <Fragment>
      <section id='fontfamily'>
      <h1 className='text-3xl text-white bg-violet-400 pl-4 font-bold' style={{ marginLeft: '50px', marginTop: '20px' }}>Font Family Selector</h1>

      <FontSText />
      <FontFamily />
     
       </section>
      
       
         <section id='fontsize'>
    <h1 className='text-3xl text-white bg-violet-400 pl-4 font-bold mx-12 mt-10' >Font Size</h1>

          <SizeSlider />
        </section>

         <section id='fontweight'>
        <h1 className='text-3xl text-white font-bold mt-6 ml-12 mr-10 bg-violet-400 pl-4'>Font Weight Selector</h1>

        <FontWeight />
        </section>

        <section id='fontstyle'>
        <h1 className='text-3xl text-white bg-violet-400 font-bold mt-6 ml-12 mr-10 pl-4'>Font Style Selector</h1>
        <Style_Font />
        </section>

        <section id='textdecoration'>
        <h1 className='text-3xl text-white bg-violet-400 font-bold mt-6 ml-12 mr-10 pl-4'>Text Decoration Selector</h1>
        <TextDecoration />
        </section>
     
     
    </Fragment>
  );
}

export default Fonts;
