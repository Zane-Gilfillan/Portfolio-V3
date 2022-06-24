import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants'

const abouts = [
  { title: 'web dev', description: 'lorem ipsum dolor sit', imgUrl: images.about01},
  { title: 'ux/ui', description: 'lorem ipsum dolor sit', imgUrl: images.about02},
  { title: 'audio design', description: 'lorem ipsum dolor sit', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">Lorem, ipsum dolor. <span> Lorem, ipsum. </span> <br /> Lorem. <span> Lorem ipsum dolor sit. </span></h2>

       <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
       </div>
    </>
  )
}

export default About