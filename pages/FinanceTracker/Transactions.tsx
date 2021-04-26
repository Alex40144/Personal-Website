import Layout, { siteTitle } from '../../components/FTlayout'
import Head from 'next/head'
import Router from 'next/router'
import useSWR from 'swr';
import Link from 'next/link'
import cookie from 'js-cookie'
import Table from '../../components/table'


export default function dashboard() {
    const fetcher = (url: string) => fetch(url).then((response) => response.json())

    const {data: user, revalidate} = useSWR('/api/authed', fetcher)
    const {data, error} = useSWR(user ? '/api/data/'+user.userId : null, fetcher)
    if (!user) return <h1>Loading...</h1>;

    let loggedIn = false;
    if (user.email) {
        loggedIn = true;
    } else {
        Router.push('/FinanceTracker')
    }
    
    if (!data) return <h1>Loading...</h1>;
    console.log(data)

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>Transactions</h1>
            <Table data={data}/>
            <button className="text-blue underline cursor-pointer"
                onClick={() => {
                cookie.remove('token');
                revalidate();
                }}>
                Logout
            </button>
            
        </Layout>
    )
  }

