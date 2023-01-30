import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
import { Envelope } from 'phosphor-react'

function Navbar() {
  return (
    <motion.nav    
      initial="hidden"
      whileInView="show"
      className=" px-2 py-0">
      <div className="xl:px-8 w-full mx-2 flex justify-between gap-4 items-center">
        <img src={logo} alt="Clickecom" className="md:w-[250px] md:h-[150px] w-[150px] h-[100px] object-contain bg-sla" />

        <motion.a 
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          href="mailto:comercial@clickecom.com.br"
          className="md:pr-0 pr-4">
            <Envelope size={32} />
          </motion.a>
      </div>
    </motion.nav>

  )
}

export default Navbar