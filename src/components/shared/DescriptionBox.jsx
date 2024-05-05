import React from 'react'
import PropTypes from 'prop-types'

function DescriptionBox({ descText, bgColor, textColor }) {
  return (
    <>
     <div>
        <p className="text-xl text-black font-semibold underline underline-offset-4">Description</p>
        <p className="text-lg" style={{
            backgroundColor: bgColor || "transparent",
            color: textColor || 'black'
        }}>{descText}</p>
     </div>
    </>
  )
}

// prop type validation
// DescriptionBox.propTypes = {
//     descText: PropTypes.elementType.isRequired,
//     bgColor: PropTypes.string,
//     textColor: PropTypes.string
// };

export default DescriptionBox