import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Script from 'next/script'
export const siteTitle = 'Alex Pegg'
import { NextSeo } from 'next-seo';

export default function Layout({
    children,
    home,
    metadata
}: {
    children: React.ReactNode
    home?: boolean
    metadata: any
}) {
    console.log(metadata)
    return (
        <div>
            <Script defer data-domain="alexpegg.uk" src="https://analytics.alexpegg.uk/js/script.js"></Script>

            <NextSeo
                title={metadata.meta_title}
                description={metadata.meta_description}
            />
            <div className="prose prose-invert text-zinc-400 px-4 sm:px-6 md:px-8 mx-auto mt-12 mb-6">
                <header>
                    <h1 className="py-8 text-4xl sm:text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        {siteTitle}
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