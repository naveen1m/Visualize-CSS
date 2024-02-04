import React, { useState } from 'react';
import { Slider } from '@mantine/core';

function Em () {
  const [selectedweightSize, setSelectedweightSize] = useState(20);
  const [selectedheightSize, setSelectedheightSize] = useState(10);

  const handleweightSizeChange = (value) => {
    setSelectedweightSize(value);
  };
  const handleheightSizeChange = (value) => {
    setSelectedheightSize(value);
  };

  const boxStyle = {
    width: `${selectedweightSize}em`,
    height: `${selectedheightSize}em`,
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
            min={1}
            max={50}
            step={1}
            style={{width:'300px'}}
          />Width: {selectedweightSize}em;
        </div>
        <div className='mt-4'>
          <Slider
            value={selectedheightSize}
            onChange={handleheightSizeChange}
            min={1}
            max={50}
            step={1}
            style={{width:'300px'}}
          />Height: {selectedheightSize}em;
        </div>
      </div>
     
      <div style={boxStyle}>
        This is a demo Text, Adjust the slidebar!
      </div>
    </div>
    </>
  );
};

export default Em;


