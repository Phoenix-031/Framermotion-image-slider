import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import images from '../images'


const ImageSlider = () => {

    // console.log(images)

    const [width,setWidth] = useState(0)
    const sliderin = useRef()

    useEffect(()=>{
        setWidth(sliderin.current.scrollWidth - sliderin.current.offsetWidth)
    },[])
    
  return (
    <motion.div className='slider' ref={sliderin}>
        <motion.div className='inner-slider'  drag = "x" dragConstraints = {{right:0, left:-width}}>
            {images.map(img=>{
                return(
                    <motion.div className='img-item' key={img}>
                        <img src={img} alt="" />
                    </motion.div>
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default ImageSlider
