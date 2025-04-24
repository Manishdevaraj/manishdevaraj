
import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const SkillDataProvider = ({src, width, height, index}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={ "visible" }
  custom={index}
  transition={{delay: index * animationDelay}}
  >
    <img
src={src}
width={width}
height={height}
alt='skill image'
    />
  </motion.div>
  )
}

export default SkillDataProvider