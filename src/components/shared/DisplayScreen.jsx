import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'flowbite-react';

function DisplayScreen({ component: PropComponent, screenDesc, bgColor }) {
  return (
    <>
    <section>
        <div 
        className="shadow-xl w-[45rem] h-[33rem] mt-6 overflow-scroll p-4 border-2 border-black rounded "
        style={{
            backgroundColor: bgColor || "beige"
        }}>
            <PropComponent />
        </div>

        <div className="block overflow-clip z-50">
        <Tooltip className="w-2/5 text-black " content={screenDesc} trigger='hover' style='auto' placement='bottom' animation='duration-500' arrow={true}  >
        <p className="mt-1 ml-3 text-red-700 underline underline-offset-4 hover:no-underline">what&apos;s on the screen</p>
        </Tooltip>
       
        </div>
    </section>
    </>
  )
}

// Prop type validation
DisplayScreen.propTypes = {
  component: PropTypes.elementType.isRequired,
  screenDesc: PropTypes.elementType.isRequired,
  bgColor: PropTypes.string
};

export default DisplayScreen;
