import React, { useContext } from 'react'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import { Navbar } from './components';
import { SidebarProvider } from "./context/sidebarcontext.jsx"
import { GetStartedProvider } from './context/getstartedcontext';
import { Home, GetStartedPage, About, ErrorPage } from './pages'
import { CssSelector, Display } from './pages/contents';


function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{
        fontFamily: 'Poppins',
        headings: { fontFamily: 'Greycliff CF, sans-serif' }
      }}
    >
      <GetStartedProvider>
        <SidebarProvider>
          <Router>
            <Navbar />

            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/getstarted' element={<GetStartedPage />} />
              <Route path='/selector' element={<CssSelector />} />
              <Route path='/display' element={<Display />} />

              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </Router>
        </SidebarProvider>
      </GetStartedProvider>
    </MantineProvider>

  )
}

export default App
