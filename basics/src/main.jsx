// named import
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// default import
import App from './App.jsx'

// StrictMode => Highlight deprecated features of React
// Dev Server => Two times it would render the component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
