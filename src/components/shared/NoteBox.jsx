import React from 'react'
import PropTypes from 'prop-types'

function NoteBox({ noteNumber, noteText, bgColor, textColor }) {
  return (
    <>
        <div>
            <p className="text-lg" style={{bgColor: bgColor || "transparent", color: textColor || "black" }}><span className="font-bold underline underline-offset-1">Note{noteNumber}:</span> {noteText}</p>
        </div>

    </>
  )
}

NoteBox.propTypes = {
    noteNumber: PropTypes.number,
    noteText: PropTypes.elementType.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};

export default NoteBox