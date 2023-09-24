import React, { useContext } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import SidebarContext from '../context/sidebarcontext'
function GetStartedPage() {
    const {sidebar} = useContext(SidebarContext);
    return (
        <div>
            {sidebar?<Sidebar />:""}
            <h1 className='text-3xl'>Hello</h1>
        </div>
    )
}

export default GetStartedPage
