import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarProvider } from './context/sidebarcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarProvider>
    <App />
    </SidebarProvider>
  </React.StrictMode>,
)
