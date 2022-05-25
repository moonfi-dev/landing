import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import { Header } from '../components/Header'
import { Email } from '../components/Email'

const About: NextPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Head>
        <title>{process.env.companyName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen min-h-screen flex flex-col">
        <Navbar />
        <div className="grow flex flex-col justify-center items-center lg:px-36 px-12 pb-5">
          <Header />
          <div className="flex md:flex-row flex-col justify-between justify-items-stretch lg:mb-10 md:mb-8 mb-2 mt-5">
            <Link href={process.env.DISCORD_INVITE || ''}>
                <a className='flex mx-10 lg:px-10 md:px-8 py-2 rounded-full bg-main-color text-white font-semibold items-center justify-center'>
                  <Image className="flex" src="/discordLogo.svg" height={30} width={30} />
                  <div className="ml-3 text-white whitespace-nowrap">
                    Join Discord
                  </div>
                </a>
            </Link>
            <div className="flex-1 md:grow-0 md:ml-auto sm:w-full flex md:my-0 my-5">
              <Email/>
            </div>
          </div>            
        </div>
        <Footer/>
      </main>
    </div>
  )
}

export default About
