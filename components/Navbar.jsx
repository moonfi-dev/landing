import Link from 'next/link';
// import Image from 'next/image'
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav id="#navbar" className='flex justify-between items-center flex-wrap md:px-10 px-3 py-6'>
        <Link href='/'>
          <a className='inline-flex items-center lg:basis-1/4 basis-1/5'>
            <span className='text-xl text-main-color font-bold tracking-wide'>
              {process.env.companyName}
            </span>
          </a>
        </Link>
        <div className='animate-bounce flex-1 grow items-center'>
          <span className='text-xl text-main-color font-semibold tracking-wider'>
            Play Wordle, Earn Money
          </span>
        </div>
        <button
          className='inline-flex flex-row-reverse p-3 rounded lg:hidden basis-1/5 text-main-color ml-auto outline-none'
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
          }   w-full lg:inline-flex lg:basis-1/4`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href="/about" passHref>
              <button
                type="button"
                className="w-full items-center justify-center rounded-full px-5 py-2 tracking-wide text-main-color md:inline-flex md:w-auto"
              >
                About
              </button>
            </Link>
            <Link href="https://app.moonfi.co">
              <button
                type="button" 
                className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded-full bg-secondary-color text-main-color font-semibold items-center justify-center'
              >
                  Earn Now
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
