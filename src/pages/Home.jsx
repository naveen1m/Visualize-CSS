import React, { Fragment, useContext, useEffect } from 'react'
import Carousel_slide from '../components/Carousel'
import GetStartedContext from '../context/getstartedcontext';

function Home() {
  const { setGetstart } = useContext(GetStartedContext);
  useEffect(() => {
    setGetstart(false);

    return () => {
      setGetstart(true);
    }
  }, [])

  return (
    <Fragment>
      <section className='h-screen z-0 '>
        <Carousel_slide />
      </section>
      <h1 className='border-2 border-green-400 mt-0 text-3xl text-center text-violet-400'>Visualize CSS here!</h1>
    </Fragment>
  )
}

export default Home
