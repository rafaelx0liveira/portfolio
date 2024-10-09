import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/_style.css'

import Header from './components/organisms/header/Header'
import Home from './components/organisms/home/Home'
import About  from './components/organisms/about/About'
import Skills from './components/organisms/skills/Skills'
import Services from './components/organisms/services/Services'
import Qualification from './components/organisms/qualification/Qualification'
import Testimonials from './components/organisms/testimonals/Testimonials'
import Contact from './components/organisms/contact/Contact'
import Footer from './components/organisms/footer/Footer'

import ScrollUp from './components/atoms/scroll_up/ScrollUp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Contact />
    </main>
    
    <Footer />
    <ScrollUp />

  </StrictMode>,
)
