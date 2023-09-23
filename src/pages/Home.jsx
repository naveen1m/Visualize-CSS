import React, { Fragment } from 'react'
import Carousel_slide from '../components/Carousel'

function Home() {
    return (
        <Fragment>
            <h1 className='text-3xl text-center text-violet-400'>Visualize CSS here!</h1>
            <section className='h-screen'>
            <Carousel_slide />
            </section>

        </Fragment>
    )
}

export default Home
