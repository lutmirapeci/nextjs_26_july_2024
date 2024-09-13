import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main container
import App from './App.jsx'
// custom styles
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
