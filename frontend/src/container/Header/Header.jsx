import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss'


const scaleVariants = { 
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-150, 0], opacity: [0,1]}}
        transition={{ duration: 2 }}
        className='app__header-info'
      >

        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>✌️</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>hello there, my name is</p>
              <h1>zane</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">web development</p>
            <p className="p-text">audio design</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.mainprofile} alt="profile-pic" />
        <motion.img
          whileInView={{ scale: [0,1]}}
          transition={{ duration: 1, eas: 'easeInOut' }}
          className='overlay_circle'
          src={images.circle}
          alt='profile circle'
        >

        </motion.img>
      </motion.div>
      
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.sass, images.react, images.sanity].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}

      </motion.div>

    </div>
  )
}

export default Header