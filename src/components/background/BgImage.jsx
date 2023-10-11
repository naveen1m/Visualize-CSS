import React, { Fragment } from 'react'

function BgImage() {
    return (
        <Fragment>
            <section>
                <section className='flex flex-row text-center ml-3'>
                    <div className='border-2 border-red-500  flex justify-center items-center'>
                        This is background Image contents
                    </div>
                    <div className='border-2 border-green-700 h-[250px] w-[350px] mx-2'>
                        this is animation
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default BgImage
