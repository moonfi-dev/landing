// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import type { AppProps, NextWebVitalsMetric } from 'next/app'
// import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
// import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css'

declare const window: any

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    const url = `https://moonfi.co${router.route}`

    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url,
                    description: 'Join us now to earn the highest yields on the market and have fun doing so.',
                    site_name: 'Moon Fi | moonfi.co',
                    images: [],
                }}
                canonical={url}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp