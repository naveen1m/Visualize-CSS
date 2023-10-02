import React, { Fragment, useState } from 'react'
import { Slider } from '@mantine/core';
import CopyToClipboard from '../CopyToClipboard'

function RGBAcolor() {
    const [redValue, setRedValue] = useState(100);
    const [greenValue, setGreenValue] = useState(100);
    const [blueValue, setBlueValue] = useState(100);
    const [alphaValue, setAlphaValue] = useState(0.5)
    let bg;
    const rgbaBackgroundColor = (redValue, greenValue, blueValue, alphaValue) => {
        const red = redValue;
        const green = greenValue;
        const blue = blueValue;
        const alpha = alphaValue;

        bg = `rgba(${red}, ${green}, ${blue},${alpha})`;
        return bg;
    };
    const bgStyleRGBA = {
        backgroundColor: rgbaBackgroundColor(redValue, greenValue, blueValue, alphaValue)

    };
    return (
        <Fragment>
            <div style={bgStyleRGBA} className='border-2 w-80 text-center flex items-center justify-center h-14 ml-12 text-white'>
                {`${bg}`}
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
                <div className='w-20  '>
                    <Slider
                        color='gray'
                        // defaultValue={40}
                        min={0}
                        max={1}
                        step={0.1}
                        value={alphaValue} onChange={setAlphaValue}
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

export default RGBAcolor
