import React, { Fragment, useContext, useEffect } from 'react'
import Carousel_slide from '../components/Carousel'
import GetStartedContext from '../context/getstartedcontext';

function Home() {
    const {setGetstart} = useContext(GetStartedContext);
    useEffect(() => {
      setGetstart(false);
    
      return () => {
        setGetstart(true);
      }
    }, [])
    
    return (
        <Fragment>
            <h1 className='text-3xl text-center text-violet-400'>Visualize CSS here!</h1>
            <section className='h-screen z-0'>
                <Carousel_slide />
            </section>

        </Fragment>
    )
}

export default Home
