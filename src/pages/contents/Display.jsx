import React, { Fragment } from 'react'

function Display() {
    return (
        <Fragment>
            <h3 className='text-center'>Display</h3>
            <div className="flex justify-between">
                <div className="content">
                    <ul>
                        <li>display: block;</li>
                        <li>display: inline;</li>
                        <li>display: inline-block;</li>
                        <li>display: flex;</li>
                        <li>display: gird;</li>
                        <li>display: block;</li>
                        <li>display: block;</li>
                        <li>display: block;</li>
                        <li>display: block;</li>
                        <li>display: block;</li>
                    </ul>
                </div>
                <div className="content">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&psig=AOvVaw0-CjBbICQTTRWL-twdoTRA&ust=1695790249143000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCx7Yy9x4EDFQAAAAAdAAAAABAE" alt="#" width={"400px"}/>
                </div>
            </div>

            {/* <section className='flex flex-row justify-start items-start '>
 
                <section className='flex-col'>

                    <p className='bg-green-300 text-center text-3xl'>Learn how to display a objects using css </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, omnis suscipit aliquid deserunt tenetur debitis voluptatem sint, voluptatibus, deleniti repudiandae vel eveniet neque nihil sunt? Ipsa animi hic asperiores. Saepe.</p>
                </section>
            </section> */}
        </Fragment>
    )
}

export default Display
