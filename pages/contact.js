import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>contact me here:</h1>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSerXWyWvdi_nebWaGAU9OmrJE6Ff4mQ3PP4xxWuP5fLVTU0cg/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Layout>
    )
  }

