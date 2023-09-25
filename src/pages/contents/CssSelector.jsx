import React, { useContext } from 'react'
import SidebarContext from '../../context/sidebarcontext'
import Sidebar from '../../components/sidebar/Sidebar';

function CssSelector() {
    const { sidebar } = useContext(SidebarContext);
    return (
        <div className='flex flex-row max-w-full'>

            <section>
                {sidebar ? <Sidebar /> : ""}
            </section>
            <section className='flex-col'>


                <p className='text-3xl text-center font-bold'>Learn how to select element of html in css</p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, omnis suscipit aliquid deserunt tenetur debitis voluptatem sint, voluptatibus, deleniti repudiandae vel eveniet neque nihil sunt? Ipsa animi hic asperiores. Saepe.</p>
            </section>
        </div>
    )
}

export default CssSelector
