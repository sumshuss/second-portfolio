import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import image from '../../assets/img/about01.png'

const abouts = [
  { title: 'Web development', description: "I am good at web development", imgUrl:`${image}`},
  { title: 'Web Design and project planning', description: "I am good at web development", imgUrl: `${image}`},
  { title: 'Implementing UI/UX', description: "I am good at web development", imgUrl: `${image}`},
  { title: 'Front end development', description: "I am good at web development", imgUrl: `${image}`}

]

const About = () => {
  return (
    <div className='About-me' id="about">
      <div className='about__title'>
       <h2 className="head-text">I Know that <span className='span-text'>Good Development</span> <br />means  <span className='span-text'>Good Business</span></h2>
      </div>
<div className="app__profiles">
  {abouts.map((about, index) => (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="app__profile-item"
      key={about.title + index}
    >
      <img src={about.imgUrl} alt={about.title} />
      <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
      <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
    </motion.div>
  ))}
</div>
    </div>

  )
}

export default About