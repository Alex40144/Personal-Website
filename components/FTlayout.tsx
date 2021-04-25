import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Alex Pegg'
export const siteTitle = 'Alex Pegg'

function toggleSidebar() {
    if (document.getElementById("Sidebar").style.width == "0px") {
        document.getElementById("Sidebar").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";
    }
    else {
        document.getElementById("Sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}


export default function Layout({
    children,
    home
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
    return (
    <div id="main">
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
        </Head>
        <header>
        {home ? (
            <>
            <Image
                priority
                src="/images/profile.png"
                height={144}
                width={144}
                alt={name}
            />
            <h1 className="text-6xl text-blue font-bold p-6">Finance Tracker</h1>
            </>
        ) : (
            <>
            <div id="Sidebar" className="h-full w-0 fixed top-0 left-0 bg-black overflow-x-hidden pt-10 duration-500 z-10">
            <a href="#" className="text-light p-8 block w-96 duration-300 hover:text-blue text-3xl">Dashboard</a>
                <a href="#" className="text-light p-8 block w-96 duration-300 hover:text-blue text-3xl">Add transaction</a>
                <a href="#" className="text-light p-8 block w-96 duration-300 hover:text-blue text-3xl">Settings</a>
            </div>
            <div className="flex flex-row bg-blue h-14 w-full">
                <button className="text-4xl text-white" onClick={toggleSidebar}>&#9776;</button>
                <Link href="/FinanceTracker">
                <a className="hover:underline text-white font-bold text-xl m-4">Finance Tracker</a>
                </Link>
            </div>
            </>
        )}
        </header>
        <div className="m-10">
            <main>{children}</main>
        </div>
    </div>
    )
}