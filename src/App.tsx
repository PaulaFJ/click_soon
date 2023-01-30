import { motion } from 'framer-motion'
import { CaretCircleDoubleDown } from 'phosphor-react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="main__glassmorphism-gradient h-screen flex flex-col w-screen">
      <Navbar />

      <Hero />
    </div>
  )
}

export default App
