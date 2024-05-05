import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import AppWrapper from './App.jsx'
import Test from './components/shared/Test.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AppWrapper /> */}
      <Test />
    </Provider>
  </React.StrictMode>,
)
