import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({
    allPostsData
    }: {
      allPostsData: {
        date: string
        title: string
        id: string
      }[]
    }) {
    return (
    <>
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="text-xl py-4">
            <p>Hi, I'm Alex. I am studying electronic engineering and I enjoy programming in my free time</p>
        </section>
        <section className="text-lg py-4">
            <h2 className="font-bold text-3xl py-4">Blog</h2>
            <ul className="m-0 p-0 list-none">
                {allPostsData.map(({ id, date, title }) => (
                    <li className="mb-8 mt-0 mx-0" key={id}>
                    <Link href={`/posts/${id}`}>
                        <a className="text-blue hover:underline text-xl">{title}</a>
                    </Link>
                    <br />
                    <small className="text-light">
                        <Date dateString={date} />
                    </small>
                    </li>
                ))}
            </ul>
        </section>
    </Layout>
    <div className="bg-blue h-36 m-0">
        <Link href={'/contact'}>
            <a className="text-white text-4xl flex h-full justify-center items-center">Contact</a>
        </Link>
    </div>
    </>
  )
}