import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import React, { useState, forwardRef, useRef } from 'react'
import ReactCardFlip from 'react-card-flip';
import * as CSS from 'csstype';

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import { Header } from '../components/Header'
import { Waitlist } from '../components/Waitlist'

const Home: NextPage = () => {
  const [isFlipped, setFlipped] = useState(false);

  interface Style extends CSS.Properties, CSS.PropertiesHyphen {}
  const cardContainerStyle: Style = {
    'flex-grow': 1,
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Head>
        <title>{process.env.companyName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="grow flex flex-col items-center justify-between justify-items-stretch text-center lg:px-36 px-12 pb-5">
            <Header />
            <div className="flex flex-row sm:w-full justify-between justify-items-stretch lg:mb-10 md:mb-8 mb-2 mt-5">
              <Link href={process.env.DISCORD_INVITE!}>
                  <a className='md:flex hidden g:w-auto lg:px-20 md:px-10 py-2 rounded-full bg-main-color text-white font-semibold items-center justify-center'>
                    <Image className="flex" src="/discordLogo.svg" height={30} width={30} />
                    <div className="ml-1.5 text-white">
                      Join Discord
                    </div>
                  </a>
              </Link>
              <div className="flex-1 md:grow-0 md:ml-auto sm:w-full sm:flex hidden">
                <Waitlist/>
              </div>
            </div>            
          </div>
        </div>
        <div className="h-screen flex flex-col">
          <div className="flex-1 glow flex flex-col my-10">
            <ReactCardFlip
              containerStyle={{
                'flex': 1,
                'flex-grow': 1,
                'margin': 'auto',
                'max-width': '400px',
                'min-width': '300px',
                'max-height': '500px',
                'min-height': '300px',
                'background-color': 'var(--secondary-color)',
              }}
              flipSpeedBackToFront={0.5} flipSpeedFrontToBack={0.5} isFlipped={isFlipped} flipDirection="vertical">
              <button className="h-full w-full" onClick={() => setFlipped(true)}>
                <h1 className="no-scrollbar inset-0 overflow-auto m-auto lg:text-4xl text-2xl text-main-color font-bold tracking-wider	">What is<br/>MoonFi?</h1>
              </button>
              <button className="flex h-full w-full" onClick={() => setFlipped(false)}>
                <div className="scrollbar absolute inset-0 overflow-auto mx-5">
                  <div className="flex text-center items-center justify-center w-full h-full">
                    <p className="lg:text-xl md:text-l text-md text-left leading-relaxed">
                      MoonFi uses <a className="font-bold" href="https://www.anchorprotocol.com/" target="_blank" rel="noopener noreferrer">Anchor Protocol</a>, a lending and borrowing protocol on <a className="font-bold" href="https://www.terra.money/" target="_blank" rel="noopener noreferrer">Terra</a>, to generate stable DeFi interest for you. We offer a simple way to earn rates even higher than Anchor – score higher on our skill-based version of Wordle and earn up to 30% APR!
                    </p>
                  </div>
                </div>
              </button>
            </ReactCardFlip>
          </div>
          <div id="#waitlist-page" className="shrink m-auto items-center justify-center text-center lg:px-56 md:px-48 sm:px-36 px-12 pt-6">
            <h1 className="lg:text-4xl text-2xl text-main-color tracking-wide">
              Get Early Access to <span className="font-bold">{process.env.companyName}</span>
            </h1>
          </div>
          <div className="shrink my-10 md:mx-10">
            <Waitlist/>
          </div>
          <div className="mt-auto">
            <Footer/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
