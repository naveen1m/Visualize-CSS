import React, { Fragment } from 'react'
import { BgColor, BgImage, BgVideo } from '../../components'

function Background() {
    return (
        <Fragment>
            <p className="text-center bg-violet-400">Learn all background properties here and play with it</p>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 mb-2 text-xl font-serif font-bold text-white'>Background color and gradient</h1>
                <div>
                    <BgColor />
                </div>
            </section>
            {/* <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background gradient</h1>
                <div>

                </div>
            </section> */}
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background Image & multiple bg-image</h1>
                <div>
                    <BgImage />
                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background shorthand</h1>
                <div>

                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background size</h1>
                <div>

                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background position</h1>
                <div>

                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background color</h1>
                <div>

                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background origin property</h1>
                <div>

                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background Attachment</h1>
                <div>

                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background clip or bg-property</h1>
                <div>

                </div>
            </section>
            <section className='my-2'>
                <h1 className='bg-violet-400 pl-3 text-xl font-serif font-bold text-white'>Background video or gif</h1>
                <div>
                    <BgVideo />
                </div>
            </section>
        </Fragment>
    )
}

export default Background
