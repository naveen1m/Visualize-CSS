import React, { Fragment, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

function DescAnimate({ desc }) {
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [desc]);

    return (
        <Fragment>
            <div className=' bg-[#3a404d] max-w-2xl min-w-[25rem] min-h-fit overflow-hidden rounded-md text-white '>
                <p className='text-sm pl-6 font-mono font-normal'>Insights</p>
                <div className='max-w-2xl min-w-[25rem] min-h-fit bg-blue-950 rounded overflow-hidden text-stone-50 px-4 py-2 '>
                    <p className='text-sm'>
                        <TypeAnimation
                            // aria-label={desc}
                            key={key}
                            sequence={desc}
                            wrapper="span"
                            speed={60}
                            style={{ display: 'inline-block', overflow: 'hidden', }}
                            repeat={1}
                            cursor={false}
                        />
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default DescAnimate
