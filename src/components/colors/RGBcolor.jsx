import React, { Fragment, useState } from 'react'
import { Slider } from '@mantine/core';
import CopyToClipboard from '../CopyToClipboard'

function RGBcolor() {
    const [redValue, setRedValue] = useState(100);
    const [greenValue, setGreenValue] = useState(100);
    const [blueValue, setBlueValue] = useState(100);
    let bg;
    const rgbBackgroundColor = (redValue, greenValue, blueValue) => {
        const red = redValue;
        const green = greenValue;
        const blue = blueValue;
        bg = `rgb(${red}, ${green}, ${blue})`;
        return bg;
    };
    const bgStyleRGB = {
        backgroundColor: rgbBackgroundColor(redValue, greenValue, blueValue),

    };

    return (
        <Fragment>
            <div style={bgStyleRGB} className='border-2 w-80 text-center flex items-center justify-center h-14 ml-12 text-white'>
                {`rgb(${redValue},${blueValue},${greenValue})`}
                <CopyToClipboard text={bg} />
            </div>

            <div className='flex space-x-10 ml-12 mt-4'>
                <div className='w-20  '>
                    <Slider
                        color='red'
                        // defaultValue={40}
                        min={0}
                        max={255}
                        value={redValue} onChange={setRedValue}
                        labelTransitionProps={{
                            transition: 'skew-down',
                            duration: 150,
                            timingFunction: 'linear',
                        }}
                    />
                </div>
                <div className='w-20  '>
                    <Slider
                        color='green'
                        // defaultValue={40}
                        min={0}
                        max={255}
                        value={greenValue} onChange={setGreenValue}
                        labelTransitionProps={{
                            transition: 'skew-down',
                            duration: 150,
                            timingFunction: 'linear',
                        }}
                    />
                </div>
                <div className='w-20  '>
                    <Slider
                        color='blue'
                        // defaultValue={40}
                        min={0}
                        max={255}
                        value={blueValue} onChange={setBlueValue}
                        labelTransitionProps={{
                            transition: 'skew-down',
                            duration: 150,
                            timingFunction: 'linear',
                        }}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default RGBcolor
