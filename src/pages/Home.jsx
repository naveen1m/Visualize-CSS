import React, { Fragment } from 'react'
import Carousel_slide from '../components/Carousel'

function Home() {

  return (
      <Fragment>
        <section className='h-screen z-0 '>
          <Carousel_slide />
        </section>
        <h1 className='text-3xl text-center text-violet-400'>Visualize CSS here!</h1>
      </Fragment>
  )
}

export default Home
