import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/_style.css'

import Header from './components/organisms/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
