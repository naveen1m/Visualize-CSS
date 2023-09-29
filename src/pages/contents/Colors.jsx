import React, { Fragment } from 'react'

function Colors() {
    return (
        <Fragment>
            <p className='text-xl mb-6 capitalize bg-violet-400 text-center'>This is color page.</p>

            <section id="hex">
                <h1 className='text-start mb-4 text-xl bg-violet-300'>hex triplet color</h1>
            </section>

            <section id="rgb">
                <h1 className='text-start mb-4 text-xl bg-violet-300'>RGB color</h1>
            </section>

            <section id="rgba">
                <h1 className='text-start mb-4 text-xl bg-violet-300'>RGBA color</h1>
            </section>

            <section id="hsl">
                <h1 className='text-start mb-4 text-xl bg-violet-300'>HSL color</h1>
            </section>

            <section id="hsla">
                <h1 className='text-start mb-4 text-xl bg-violet-300 active:bg-blue-400'>HSLA color</h1>
            </section>
        </Fragment>
    )
}

export default Colors
