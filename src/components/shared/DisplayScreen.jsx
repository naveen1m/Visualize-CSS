import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'flowbite-react';

function DisplayScreen({ component: PropComponent, screenDesc, bgColor }) {
  return (
    <>
    <section>
        <div 
        className="shadow-xl"
        style={{
            width: "500px", height: "400px",
            overflow: "scroll",
            backgroundColor: bgColor || "beige",
            padding: "10px",
            border: "2px solid black",
            borderRadius: "15px",
        }}>
            <PropComponent />
        </div>

        <div>
        <Tooltip className='w-1/3' content={screenDesc} trigger='hover' style='auto' placement='bottom' animation='duration-500' arrow={true}  >
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
