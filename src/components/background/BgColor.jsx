import React, { Fragment } from 'react'
import image1 from '../../assets/background/bg-img-use.jpg'


function BgColor() {
    return (
        <Fragment>
            <section>
                <section className='flex flex-row text-center ml-3 '>
                    <div className='border-2 border-red-500  flex justify-between items-center'>
                        <p className='bg-slate-400'>Color Names</p>
                        <p>background-color: red;</p>
                    </div>
                    <div className='flex flex-row  items-center  border-2 border-green-700 h-[250px] w-[450px] mx-2 bg-slate-300'>
                        <p className='pl-3 text-sm text-left w-fit'>This is a text content along with an image at right and body have some background color.</p>
                        <div className='inline-flex mt-4 pr-2'>
                            <img src={image1} alt="Image"
                                style={{ width: '170px', height: '100px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default BgColor
