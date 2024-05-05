import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './app/store.js'
import { Provider } from 'react-redux'
import AppWrapper from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />

    </Provider>
  </React.StrictMode>,
)
