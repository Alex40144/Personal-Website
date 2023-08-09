import Image from 'next/image'
import Link from 'next/link'
import Layout from './../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'
import PostCard from '../components/postCard'

export default function Home({ posts }: { posts: Array<Object> }) {
    return (
        <Layout props={"Alex Pegg"} home>
            {posts.map((post, index) => (
                <PostCard post={post} index={index} key={index} />
            ))}
        </Layout>
    )
}


export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            frontMatter,
            slug: filename.split('.')[0]
        }
    })

    posts.sort((a: any, b: any) => Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date));
    return {
        props: {
            posts
        }
    }
}