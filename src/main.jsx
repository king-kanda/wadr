import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Scroll from './components/scroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Scroll/>
    <App />
  </BrowserRouter>,
)
