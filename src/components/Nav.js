import React from 'react';
import { navData } from '../data';

const Nav = ({ setNav }) => {
  const handleClick = () => {
    setNav(false);
  };
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {
          navData.map((item, index) => {
            return (
              <li key={index}>
                <a onClick={handleClick} className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300' href={item.href}>
                  {item.name}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
};

export default Nav;
