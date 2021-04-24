import Layout, { siteTitle } from '../../components/FTlayout'
import Head from 'next/head'
import Router from 'next/router'
import useSWR from 'swr';
import Link from 'next/link'
import cookie from 'js-cookie'

export default function Dashboard() {
    const {data, revalidate} = useSWR('/api/authed', async function(args) {
        const res = await fetch(args);
        return res.json();
    });
    if (!data) return <h1>Loading...</h1>;
    let loggedIn = false;
    if (data.email) {
        loggedIn = true;
    }

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {loggedIn && (
                <>
                <p>Welcome {data.email}!</p>
                <button
                    onClick={() => {
                    cookie.remove('token');
                    revalidate();
                    }}>
                    Logout
                </button>
                </>
            )}
            {!loggedIn && (
                <form className="flex flex-row w-full justify-between">
                <Link href="/FinanceTracker/Signup">
                    <input 
                        className="text-3xl bg-blue font-bold flex m-5 px-4 py-8 flex-grow rounded-md cursor-pointer"
                        value="Sign up"
                        type="submit"
                    />
                </Link>
                <Link href="/FinanceTracker/Login">
                    <input
                        className="text-3xl bg-blue font-bold flex m-5 px-4 py-8 flex-grow rounded-md cursor-pointer"
                        value="Log in"
                        type="submit"
    
                    />
                </Link>
                </form>
            )}
            <h1>Dashboard</h1>
            <p>Someone make this look nice</p>
        </Layout>
    )
  }

