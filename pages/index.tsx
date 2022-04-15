import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import React, { forwardRef, useRef } from 'react'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import { Header } from '../components/Header'
import { Waitlist } from '../components/Waitlist'

const Home: NextPage = () => {
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
            <div className="flex flex-row sm:w-full justify-between justify-items-stretch lg:mb-10 md:mb-8 mb-2">
              <Link href={process.env.DISCORD_INVITE!}>
                  <a className='md:flex hidden g:w-auto px-5 py-2 rounded-full bg-main-color text-white font-semibold items-center justify-center'>
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
          <div id="#waitlist-page" className="m-auto items-center justify-center text-center lg:px-56 md:px-48 sm:px-36 px-12 pt-6">
            <h1 className="lg:text-6xl text-4xl text-main-color mb-8">
              Get Early Access to <span className="font-bold tracking-wide">{process.env.companyName}</span>
            </h1>
            <p className="lg:text-2xl md:text-xl text-md">
              MoonFi uses <a className="font-bold" href="https://www.anchorprotocol.com/" target="_blank" rel="noopener noreferrer">Anchor Protocol</a>, a lending and borrowing protocol on <a className="font-bold" href="https://www.terra.money/" target="_blank" rel="noopener noreferrer">Terra</a>, to generate stable DeFi interest for you. We offer a simple way to earn rates even higher than Anchor – score higher on our skill-based version of Wordle and earn up to 30% APR!
            </p>
          </div>
          <div className="flex-1 mx-auto mt-10 grow">
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
