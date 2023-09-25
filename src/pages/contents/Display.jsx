import React, { Fragment, useContext } from 'react'
import SidebarContext from '../../context/sidebarcontext'
import Sidebar from '../../components/sidebar/Sidebar';

function Display() {
    const { sidebar } = useContext(SidebarContext);
    return (
        <Fragment>
            <section className='flex flex-row justify-start items-start '>

                <section>
                    {sidebar ? <Sidebar /> : ""}
                </section>
                <section className='flex-col'>


                    <p className='bg-green-300 text-center text-3xl'>Learn how to display a objects using css </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, omnis suscipit aliquid deserunt tenetur debitis voluptatem sint, voluptatibus, deleniti repudiandae vel eveniet neque nihil sunt? Ipsa animi hic asperiores. Saepe.</p>
                </section>
            </section>
        </Fragment>
    )
}

export default Display
