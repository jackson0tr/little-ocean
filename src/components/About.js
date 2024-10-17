import React from 'react';
import { aboutData } from '../data';
import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '../variants';

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section id='about' className='min-h-[620px]'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{
          once: false,
          amount: 0.6
        }}
        className='mx-auto min-h-[620px]'>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1.8)}
          className='flex flex-col lg:flex-row items-center'>
          <div className='flex-1 text-cecnter lg:text-left'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max-w-[560px]'>{subtitle}</p>
            {/* <button className='btn capitalize mx-auto lg:mx-0'>
              <a target='blank' href='https://www.elmenus.com/cairo/little-ocean-restaurant-5o6p6'>{btnText}</a>
            </button> */}
          </div>
          <motion.div
            variants={plateVariants}
            className='-mb-[300px] -mr-[186px] z-10'>
            <img src={image} alt='img' />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
};

export default About;
