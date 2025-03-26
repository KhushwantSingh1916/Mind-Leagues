import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import FirstPage from './firsstpage.jsx'

// Initialize tailwind styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirstPage />
    </BrowserRouter>
  </React.StrictMode>
)