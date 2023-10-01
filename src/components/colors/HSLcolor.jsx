import React, { Fragment, useState } from 'react'
import { Slider } from '@mantine/core';
import CopyToClipboard from '../CopyToClipboard'

function HSLcolor() {
    const [hue, setHue] = useState(40);
    const [saturation, setSaturation] = useState(40);
    const [lightness, setLightness] = useState(40);
    let bg;
    const hslBackgroundColor = (hue, saturation, lightness) => {

        bg = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        return bg;
    };
    const bgStyleHSL = {
        backgroundColor: hslBackgroundColor(hue, saturation, lightness),

    };
    return (
        <Fragment>
            <div style={bgStyleHSL} className='border-2 w-80 text-center flex items-center justify-center h-14 ml-12 text-white'>
                {`${bg}`}
                <CopyToClipboard text={bg} />
            </div>

            <div className='flex space-x-10 ml-12 mt-4'>
                <div className='w-20  '>
                    <Slider
                        color='red'
                        // defaultValue={40}
                        min={0}
                        max={359}
                        value={hue} onChange={setHue}
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
                        max={100}
                        value={saturation} onChange={setSaturation}
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
                        max={100}
                        value={lightness} onChange={setLightness}
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

export default HSLcolor
