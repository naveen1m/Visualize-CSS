import React, { useState } from 'react';
import { Slider } from '@mantine/core';
import CopyToClipboard from '../CopyToClipboard';
import DescAnimate from '../DescAnimate';

function Hexcolor() {
    const [red, setRed] = useState(10);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const toHex = (value) => {
        console.log(value)
        return value.toString(16).padStart(2, '0');
    };

    const hexColor = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;

    const desc = `A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.`;

    return (
        <div className='mb-6'>
            <div style={{ backgroundColor: hexColor }} className='border-2 w-80 text-center flex items-center justify-center h-14 ml-12 text-white'>
                {hexColor}
                <CopyToClipboard text={hexColor} />
            </div>
            <div className='flex space-x-10 ml-12 mt-4'>
                <div className='w-20  '>
                    <Slider
                        color='red'
                        value={red}
                        onChange={setRed}
                        label={toHex(red)}
                        min={0}
                        max={255}
                    />
                </div>
                <div className='w-20  '>
                    <Slider
                        color='green'
                        value={green}
                        onChange={setGreen}
                        label={toHex(green)}
                        min={0}
                        max={255}

                    />
                </div>
                <div className='w-20  '>
                    <Slider
                        color='blue'
                        value={blue}
                        onChange={setBlue}
                        label={toHex(blue)}
                        min={0}
                        max={255}
                    />
                </div>
            </div>

            <DescAnimate text={desc} />

        </div>
    );
}

export default Hexcolor;
