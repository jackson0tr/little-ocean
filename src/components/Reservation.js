import React, { useState } from 'react';
import { reservationData } from '../data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import '../timepicker.css';
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';


const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('10:00')
  return (
    <section id='book' className='relative top-96 z-30 pb-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='text-center'>
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'>
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark'>
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'>
            <img src={modelImg} alt='img' />
          </motion.div>
        </motion.div>
        <motion.form initial='hidden' whileInView={'show'} variants={fadeIn('up', 'tween', 0.7, 1.6)}>
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>
            <div className=''>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)} />
            </div>

            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className='input'
                clearIcon={false}
                clockIcon={false}
                value={value}
                onChange={setValue} />
            </div>

            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUsers />
                <div>How Many People?</div>
              </div>
              <input
                className='input'
                placeholder='1'
                type='text' />
            </div>
          </div>

          <div className='max-w-[316px] mx-auto flex justify-center'>
            <button className='btn capitalize w-full lg:w-auto'>
              {btnText}
            </button>
          </div>

        </motion.form>
      </div>
    </section>
  )
};

export default Reservation;
