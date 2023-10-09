


import React, { useState } from 'react';
import { Slider } from '@mantine/core';

function Percentage() {
  const [selectedweightSize, setSelectedweightSize] = useState(50);
  const [selectedheightSize, setSelectedheightSize] = useState(50);

  const handleweightSizeChange = (value) => {
    setSelectedweightSize(value);
  };

  const handleheightSizeChange = (value) => {
     console.log('handleheightSizeChange called with value:', value);
    setSelectedheightSize(value); 
  };

  const boxStyle = {
    width: `${selectedweightSize}%`,
    height: `${selectedheightSize}%`,
    background: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5px',
    marginTop: '50px',
    overflow: 'hidden',
    flex: 'wrap',
  };

  return (
    <>
      <div className='ml-12 items-center h-1/2'>
        
          <div className='mt-12'>
            <Slider
              value={selectedweightSize}
              onChange={handleweightSizeChange}
              min={1}
              max={100}
              step={1}
              style={{ width: '300px' }}
            />
            Width: {selectedweightSize}%;
          </div>
          <div className='mt-4'>
            <Slider
              value={selectedheightSize}
              onChange={handleheightSizeChange}
              min={1}
              max={100}
              step={1}
              style={{ width: '300px' }}
            />
            Height: {selectedheightSize}%;
          </div>
        

        <div style={boxStyle}>
          This is a demo Text, Adjust the slidebar!
        </div>
      </div>
    </>
  );
}

export default Percentage;
