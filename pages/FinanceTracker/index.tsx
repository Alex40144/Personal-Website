import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../../components/FTlayout'

export default function Main(){
  return (
    <Layout>
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
      <p>This is a very basic Finance tracker</p>
    </Layout>
  )
}
