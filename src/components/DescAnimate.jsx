import React, { Fragment } from 'react'
import { TypeAnimation } from 'react-type-animation';

function DescAnimate({ text }) {
    return (
        <Fragment>
            <TypeAnimation
                // aria-label={text}
                sequence={text}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block', overflow: 'hidden', }}
                repeat={1}
                cursor={false}
            />
        </Fragment>
    )
}

export default DescAnimate
