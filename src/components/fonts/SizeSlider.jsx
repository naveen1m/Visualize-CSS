import React, { useState } from 'react';
import { Slider } from '@mantine/core';

const SizeSlider = () => {
  const [selectedFontSize, setSelectedFontSize] = useState(20);

  const handleFontSizeChange = (value) => {
    setSelectedFontSize(value);
  };

  const boxStyle = {
    width: '500px',
    height: '150px',
    background: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: `${selectedFontSize}px`,
    marginLeft: '5px',
    marginTop:'90px',
    overflow: 'hidden',
    flex:'wrap'
    
  };
  const boxSyntax={
   
    width: '500px',
    height: '100px',
    background: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5px',
    marginTop:'10px',
   
  }

  return (
    <>
     <h1 className='ml-12 mr-10 mt-7 font-sans '>Description :</h1>
   <h2 className='mt-5 ml-12 mr-10 text-xl font-sans'>There are several ways to specify the font size, including keywords or numerical values for pixels or ems.</h2>
   <h1 className='ml-12 mt-7 mr-10 font-sans '>Pixels :</h1>
   <p className='mt-5 ml-12 mr-10 text-xl font-sans'>Setting the font size in pixel values (px) is a good choice when you need pixel accuracy. A px value is static. This is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified. The results may vary slightly across browsers, as they may use different algorithms to achieve a similar effect.</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        
        <div style={{ marginLeft: '50px', marginTop: '20px' }}>
          <Slider
            value={selectedFontSize}
            onChange={handleFontSizeChange}
            min={5}
            max={60}
            step={1}
            style={{width:'300px'}}
           
          />
        
        </div>
      </div>
      <dir>
      <div style={boxStyle}>
        This is a demo Text, Adjust the slidebar!
      </div>
      <div style={boxSyntax}>
        Font Size: {selectedFontSize}px;
      </div>
      </dir>
    </div>
    </>
  );
};

export default SizeSlider;


