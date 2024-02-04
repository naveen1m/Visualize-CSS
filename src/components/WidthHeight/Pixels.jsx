import React, { useState } from 'react';
import { Slider } from '@mantine/core';

function Pixels () {
  const [selectedweightSize, setSelectedweightSize] = useState(200);
  const [selectedheightSize, setSelectedheightSize] = useState(100);

  const handleweightSizeChange = (value) => {
    setSelectedweightSize(value);
  };
  const handleheightSizeChange = (value) => {
    setSelectedheightSize(value);
  };

  const boxStyle = {
    width: `${selectedweightSize}px`,
    height: `${selectedheightSize}px`,
    background: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5px',
    marginTop:'50px',
    overflow: 'hidden',
    flex:'wrap'
    
  };
  

  return (
    <>
    <div className='ml-12 items-center'>
    <div>
        <div className='mt-12'>
          <Slider
            value={selectedweightSize}
            onChange={handleweightSizeChange}
            min={70}
            max={300}
            step={1}
            style={{width:'300px'}}
          />Width: {selectedweightSize}px;
        </div>
        <div className='mt-4'>
          <Slider
            value={selectedheightSize}
            onChange={handleheightSizeChange}
            min={70}
            max={300}
            step={1}
            style={{width:'300px'}}
          />Height: {selectedheightSize}px;
        </div>
      </div>
     
      <div style={boxStyle}>
        This is a demo Text, Adjust the slidebar!
      </div>
    </div>
    </>
  );
};

export default Pixels;


