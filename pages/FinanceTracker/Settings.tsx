import Layout, { siteTitle } from '../../components/FTlayout'
import Head from 'next/head'
import React, { useState } from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import cookie from 'js-cookie'
import Table from '../../components/table'


export default function dashboard() {
    const [category, setCategory] = useState('')


    const fetcher = (url: string) => fetch(url).then((response) => response.json())

    const {data: user, revalidate} = useSWR('/api/authed', fetcher)
    const {data, error} = useSWR(user ? '/api/getUserSettings?id='+user.id : null, fetcher)
    if (!user) return <h1>Loading...</h1>;

    let loggedIn = false;
    if (user.email) {
        loggedIn = true;
    } else {
        Router.push('/FinanceTracker')
    }
    
    if (!data) return <h1>Loading...</h1>;
    console.log(data)
    var categories = data.categories

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const body = {category}
        const res = await fetch(`http://localhost:3000/api/updateUserSettings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        .then((r) => r.json())
        .then((data) => {
        if (data && data.error) {
            alert(data.message)
        }
        });
        
    };

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>Categories</h1>
            <div>
            {categories.map(listitem => (
                <li>{listitem}</li>
            ))}
            </div>
            <div className="p-12 -flex text-justify">
                <form
                onSubmit={submitData}>
                <h1>Add category</h1>
                <input
                    onChange={e => setCategory(e.target.value)}
                    placeholder="category"
                    type="text"
                    value={category}
                />
                <input
                    disabled={!category}
                    type="submit"
                    value="Save"
                />
                </form>
            </div>
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

