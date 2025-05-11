import React from 'react'
import { createRoot } from 'react-dom/client'

// App entry
import App from './App.jsx'

// Global styles (includes Tailwind)
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
