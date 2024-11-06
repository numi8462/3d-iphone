import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hightlights from './components/Highlights'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Hightlights/>

    </main>
    
  )
}

export default App
