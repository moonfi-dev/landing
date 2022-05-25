import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import React, { useState, forwardRef, useRef } from 'react'
import * as CSS from 'csstype';

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import GameApp from '../components/Wordle'

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

      <main className="w-screen min-h-screen flex-1 flex-col items-center justify-center bg-white text-center">
        <div className="w-screen min-h-screen flex flex-col">
          <Navbar showSlogan={true}/>
          <div className="flex grow">
            <GameApp />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
