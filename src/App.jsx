import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hightlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Hightlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
    
  )
}

export default App
