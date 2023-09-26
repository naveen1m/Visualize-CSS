import React, { Fragment, useContext } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import SidebarContext from '../context/sidebarcontext'
function GetStartedPage() {
  const [sidebar, setSidebar] = useContext(SidebarContext);
    return (
        <Fragment>

                <section className={`content ml-2 ${sidebar ? " ml-4" : ""}`}>
                    <h1 className={`text-3xl font-bold ${sidebar ? "text-violet-400" : ""}`}>Get start with the VisualizeCSS!</h1>
                    <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam praesentium magni suscipit quidem repellendus reprehenderit? Mollitia fugiat quaerat provident, unde adipisci reprehenderit excepturi ut, eos sapiente, minus minima earum praesentium?</p>
                    <h2 className='text-2xl mt-2 font-semibold'>How you can achive more from this?</h2>
                    <p className="text-xl ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores obcaecati excepturi, illum distinctio voluptates, culpa dolorum assumenda aspernatur ab iusto dignissimos nulla provident vitae, quia corporis! Aperiam, saepe alias.
                    </p>
                    <h2 className='text-2xl mt-2 font-semibold'>Estimated time to learn and visualizeCSS important topics from this website</h2>
                    <p className="text-xl ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores obcaecati excepturi, illum distinctio voluptates, culpa dolorum assumenda aspernatur ab iusto dignissimos nulla provident vitae, quia corporis! Aperiam, saepe alias.
                    </p>
                </section>

        </Fragment>
    )
}

export default GetStartedPage
