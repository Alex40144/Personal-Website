import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>404 - Page Not Found</h1>
            <p>Someone make this look nice</p>
        </Layout>
    )
  }

