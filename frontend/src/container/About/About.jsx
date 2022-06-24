import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const abouts = [
  { title: 'web dev', description: 'lorem ipsum dolor sit', imgUrl: ''},
  { title: 'ux/ui', description: 'lorem ipsum dolor sit', imgUrl: ''},
  { title: 'audio design', description: 'lorem ipsum dolor sit', imgUrl: ''}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Lorem, ipsum dolor.
        <span>Lorem, ipsum.</span>
        <br />
        Lorem.
        <span>Lorem ipsum dolor sit.</span>
       </h2>

       <div className="app__profiles">
        {abouts.map((abouts, index) => (
          <motion.div>
            
          </motion.div>
        ))}
       </div>
    </>
  )
}

export default About