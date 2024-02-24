import { serialize } from 'next-mdx-remote/serialize'
import { mdSerialize } from '../../components/mdSerializer'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'
import Layout from '../../components/layout'



const components = {}

export default function PostPage({ frontMatter: { title, date, description }, mdxSource }: { frontMatter: { title: String, date: string, description: string }, mdxSource: any }) {
  return (
    <Layout metadata={{ meta_title: title, meta_data: date, meta_description: description }}>
      <div className="mt-4">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </Layout>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { id } }: { params: { id: String } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    id + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await mdSerialize(content)

  return {
    props: {
      frontMatter,
      id,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }