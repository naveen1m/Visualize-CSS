import React, { useContext } from 'react'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { SidebarProvider } from "./context/sidebarcontext.jsx"
import { Home, About, ErrorPage } from './pages'
import { GetStartedPage, CssSelector, Display, Fonts, Colors, Float, WandH, Boxmodel, Background, Images } from './pages/contents';

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
        <div className=' '>
          <Navbar />
          <div>
            <section className=' flex flex-grow flex-row w-full'>
              {sidebar ? <Sidebar /> : ""}
            </section>
            <section className={`max-w-full ${sidebar ? 'ml-52' : 'ml-0'} `} >
              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/getstarted' element={<GetStartedPage />} />
                <Route path='/selector' element={<CssSelector />} />
                <Route path='/display' element={<Display />} />
                <Route path='/fonts' element={<Fonts />} />
                <Route path='/colors' element={<Colors />} />
                <Route path='/float' element={<Float />} />
                <Route path='/boxmodel' element={<Boxmodel />} />
                <Route path='/wnh' element={<WandH />} />
                <Route path='/background' element={<Background />} />
                <Route path='/images' element={<Images />} />

                <Route path='*' element={<ErrorPage />} />

              </Routes>
            </section>
          </div>
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
