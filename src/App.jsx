import React, { useContext } from 'react'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import { Navbar } from './components';
import { SidebarProvider } from "./context/sidebarcontext.jsx"
import { GetStartedProvider } from './context/getstartedcontext';
import { Home, GetStartedPage, About, ErrorPage } from './pages'
import { CssSelector, Display } from './pages/contents';

import SidebarContext from "./context/sidebarcontext.jsx"
import Sidebar from './components/sidebar/Sidebar.jsx';


function App() {
  const [sidebar, setSidebar] = useContext(SidebarContext);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{
        fontFamily: 'Poppins',
        headings: { fontFamily: 'Greycliff CF, sans-serif' }
      }}
    >
          <Router>
            <Navbar />
            <div className='flex flex-row max-w-full'>
                <section className='content'>
                    {sidebar ? <Sidebar /> : ""}
                </section>

                <section className='content' style={{width: "10000px"}}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
              <Route path='/getstarted' element={<GetStartedPage />} />
              <Route path='/selector' element={<CssSelector />} />
              <Route path='/display' element={<Display />} />

              <Route path='*' element={<ErrorPage />} />
                </Routes>
                </section>

            </div>

          </Router>
    </MantineProvider>

  )
}

export default function AppWrapper() {
  return (
    <SidebarProvider>
      <App />
    </SidebarProvider>
  );
}
