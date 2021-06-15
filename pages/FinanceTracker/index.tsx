import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../../components/FTlayout'
import useSWR from 'swr';
import { ToastContainer, toast } from 'react-toastify';

export default function Main(){
    const {data, revalidate} = useSWR('/api/authed', async function(args) {
        const res = await fetch(args);
        return res.json();
    });
    if (!data) return <h1>Loading...</h1>;
    if (data.email) {
        Router.push("/FinanceTracker/Dashboard")
    }
    if (data.message){
        toast(data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
    }
  return (

    <Layout home>
        <ToastContainer />
        <h2>This is a work in progress, so you might lose all your data</h2>
        <form className="flex flex-row w-full justify-evenly text-center">
            <div className="text-center w-auto">
                <Link href="/FinanceTracker/Signup">
                    <input
                        className="text-3xl bg-blue font-bold flex m-5 px-4 py-8 flex-grow rounded-md cursor-pointer"
                        value="Sign up"
                        type="submit"
                    />
                </Link>
            </div>
            <div className="text-center w-auto">
                <Link href="/FinanceTracker/Login">
                    <input
                        className="text-3xl bg-blue font-bold flex m-5 px-4 py-8 flex-grow rounded-md cursor-pointer"
                        value="Log in"
                        type="submit"
                    />
                </Link>
            </div>
        </form>
      <p>This is a very basic Finance tracker</p>
    </Layout>
  )
}
