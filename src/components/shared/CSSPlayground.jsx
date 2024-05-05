import React from 'react'
import PropTypes from 'prop-types'
import EditableList from './RenderList'
import DisplayScreen from './DisplayScreen'

function CSSPlayground({ data, color1, color2, component: PropComponent, screenDesc, bgColor }) {
  return (
    <>
        <section className="flex my-2 px-4 bg-white/30 backdrop-blur-sm">
        <EditableList data={data} color1={color1} color2={color2}  />
        <div className="flex  min-h-[100%] pr-6 pb-2 pt-6">
          <div className="h-[400px] min-h-[96%] w-[2px] mx-3 my-1 self-stretch bg-gradient-to-tr from-transparent via-black to-transparent opacity-100 dark:via-neutral-400"></div>
        </div>
        <DisplayScreen component={PropComponent} screenDesc={screenDesc} bgColor={bgColor} />
      </section>
    </>
  )
}

// CSSPlayground.propTypes = {
//   data: PropTypes.elementType.isRequired,
//   color1: PropTypes.any,
//   color2: PropTypes.any,
//   component: PropTypes.elementType.isRequired,
//   screenDesc: PropTypes.elementType.isRequired,
//   bgColor: PropTypes.string
// };

export default CSSPlayground
