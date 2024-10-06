import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/_style.css'

import Header from './components/organisms/header/Header'
import Home from './components/organisms/home/Home'
import About  from './components/organisms/about/About'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    
    <main className="main">
      <Home />
      <About />
    </main>
  </StrictMode>,
)
