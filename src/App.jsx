import React from 'react'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetStartedPage from './pages/GetStartedPage';
import { Hamburger } from './utils/Burger';


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{
        fontFamily: 'Poppins',
        headings: { fontFamily: 'Greycliff CF, sans-serif' }
      }}
    >
      <Router>
        <Hamburger />
        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<GetStartedPage />} /> */}


        </Routes>
      </Router>
    </MantineProvider>

  )
}

export default App
