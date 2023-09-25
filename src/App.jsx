import React, { useContext } from 'react'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetStartedPage from './pages/GetStartedPage';
import Navbar from './components/Navbar';
import SidebarContext from "./context/sidebarcontext.jsx"
import Sidebar from './components/sidebar/Sidebar';


function App() {
  const { sidebar } = useContext(SidebarContext);
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
                <section>
                    {sidebar ? <Sidebar /> : ""}
                </section>

            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/getstarted' element={<GetStartedPage />} />


            </Routes>

            </div>

          </Router>
    </MantineProvider>

  )
}

export default App
