import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const siteTitle = 'Alex Pegg'

export default function Layout({
    children,
    home,
    props
}: {
    children: React.ReactNode
    home?: boolean
    props: any
}) {
    const [Title, setTitle] = useState(props)
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta http-equiv='content-language' content='en-gb' />
            </Head>
            <div className="prose prose-invert text-zinc-400 px-4 sm:px-6 md:px-8 mx-auto mt-12 mb-6">
                <header>
                    <h1 className="py-8 text-4xl sm:text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        {Title}
                    </h1>
                </header>
                <main>{children}</main>
                {!home && (
                    <div className="my-3 text-blue hover:underline">
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}