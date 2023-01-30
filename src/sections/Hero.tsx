import { motion } from 'framer-motion'

import { textVariant } from '../utils/motion'
import { styles } from '../styles/index'
import { InstagramLogo, FacebookLogo } from 'phosphor-react'

function Hero() {
  return (
    <motion.div 
        initial="hidden"
        whileInView="show"
        className={`w-full h-full flex flex-col gap-4 justify-between items-center ${styles.yPaddings}`}
      >   
        <div>
          <motion.h1  
            variants={textVariant(0.8)}
            className={`text-6xl md:text-7xl lg:text-9xl font-semibold drop-shadow-lg md:pt-20 pt-32 pb-4`}>
            EM BREVE
          </motion.h1>

          <motion.h1 variants={textVariant(2)} className="lg:text-6xl md:text-4xl text-3xl drop-shadow-lg">GRANDES NOVIDADES</motion.h1>
        </div>

        <motion.ul
          className="pb-16 md:pb-8 flex gap-4"
          >
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>

            <a href="https://instagram.com/clickecom">
              <InstagramLogo size={24} color="grey" />
            </a>

          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>

            <a href="">
              <FacebookLogo size={24} color="grey" />
            </a>

          </motion.li>          
        </motion.ul>
      </motion.div>  
  )
}

export default Hero