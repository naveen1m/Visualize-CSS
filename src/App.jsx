import React from 'react'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetStartedPage from './pages/GetStartedPage';
import Navbar from './components/Navbar';
import { SidebarProvider } from "./context/sidebarcontext.jsx"
import { GetStartedProvider } from './context/getstartedcontext';


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
              <Route path='/getstarted' element={<GetStartedPage />} />


            </Routes>

          </Router>
        </SidebarProvider>
      </GetStartedProvider>
    </MantineProvider>

  )
}

export default App
