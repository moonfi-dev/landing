import Link from 'next/link';
// import Image from 'next/image'
import { useState } from 'react';
import React, { forwardRef, useRef } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleJoinWaitlist = () => {
    if (window !== undefined) {
      document.getElementById('#waitlist-page').scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav id="#navbar" className='flex items-center flex-wrap px-10 py-6'>
        <Link href='/'>
          <a className='inline-flex items-center'>
            <span className='text-xl text-main-color font-bold tracking-wide'>
              {process.env.companyName}
            </span>
          </a>
        </Link>
        <button
          className='inline-flex p-3 rounded lg:hidden text-main-color ml-auto outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <button
              type="button" onClick={() => { handleJoinWaitlist() }}
              className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded-full bg-secondary-color text-main-color font-semibold items-center justify-center'
            >
                Join Waitlist
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
