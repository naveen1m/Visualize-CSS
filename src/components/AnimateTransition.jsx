import React, { Fragment, useEffect, useState, useRef } from 'react';

function AnimateTransition({ desc }) {
    const [key, setKey] = useState(0);
    const [height, setHeight] = useState('auto');
    const [showContent, setShowContent] = useState(false);
    const contentRef = useRef(null);


    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
        setHeight(`${contentRef.current.scrollHeight / 16}rem`); // Convert height to rem units
        setTimeout(() => {
            setShowContent(true);
        }, 500);
    }, [desc]);

    return (
        <Fragment>
            <style>
                {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade {
            animation: fadeIn 0.5s ease-in-out 1 forwards;
          }          
          .animate-height {
            transition: max-height 1s ease-in-out;
          }
        `}
            </style>
            <div
                className={`border-2 border-red-500 max-w-2xl min-w-[25rem] overflow-hidden rounded-md mb-1 text-white ${showContent ? 'animate-height' : ''
                    }`}
                style={{ maxHeight: height }}
            >
                <div className={`bg-[#3a404d] ${showContent ? '' : 'h-0'}`}>
                    <p className='text-sm pl-6 font-mono font-normal'>Insights</p>
                </div>
                <div className='max-w-2xl min-w-[25rem] bg-blue-950 rounded-b  overflow-hidden text-stone-50 px-4 py-2'>
                    <p className='text-sm '>
                        <span
                            className={`pb-1 block overflow-hidden animate-fade ${showContent ? 'animate-fade-in' : ''
                                }`}
                            key={key}
                            ref={contentRef}
                        >
                            {desc}
                        </span>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default AnimateTransition;
