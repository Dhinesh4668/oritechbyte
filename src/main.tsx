import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'; // Importing global styles
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
