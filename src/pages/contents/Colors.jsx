import React, { Fragment } from 'react'
import { RGBcolor, Hexcolor, RGBAcolor, HSLcolor, HSLAcolor, DescAnimate } from '../../components'

function Colors() {
    const desc = `hello this is color page, created by naveen!\n you will learn here a lots of ways to use color in css.
    Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
    `

    return (
        <Fragment>
            <p className='text-xl mb-6 capitalize bg-violet-400 text-center '>This is color page.</p>

            <DescAnimate text={desc} />
            <section id="hex">
                <h1 className='text-start mb-4 text-xl bg-violet-300 pl-4'>hex triplet color</h1>
                <Hexcolor />

            </section>

            <section id="rgb" className='mb-6'>
                <h1 className='text-start mb-4 text-xl bg-violet-300 pl-4 '>RGB color</h1>
                <RGBcolor />

            </section>

            <section id="rgba" className='mb-6'>
                <h1 className='text-start mb-4 text-xl bg-violet-300 pl-4'>RGBA color</h1>
                <RGBAcolor />
            </section>

            <section id="hsl" className='mb-6'>
                <h1 className='text-start mb-4 text-xl bg-violet-300 pl-4'>HSL color</h1>
                <HSLcolor />
            </section>

            <section id="hsla" className='mb-6'>
                <h1 className='text-start mb-4 text-xl bg-violet-300 active:bg-blue-400 pl-4'>HSLA color</h1>
                <HSLAcolor />
            </section>
        </Fragment>
    )
}

export default Colors
