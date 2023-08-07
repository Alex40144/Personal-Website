import fs from 'fs'
import path from 'path'
// import { unified } from 'unified';
const unified = require('unified')
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import {read} from 'to-vfile'
import extract from 'remark-extract-frontmatter';
import remarkFrontmatter from 'remark-frontmatter';
import yaml from 'yaml';
import {matter as vmatter} from 'vfile-matter'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * Plugin to parse YAML frontmatter and expose it at `file.data.matter`.
 *
 * @type {import('unified').Plugin<Array<void>>}
 */
export default function remarkParseFrontmatter() {
  return function (_, file) {
    matter(file)
  }
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')


    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)


  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'one-dark-pro',
    })
    .use(remarkParseFrontmatter)
    .use(extract, { yaml: yaml.parse, name: 'meta' })
    .use(remarkFrontmatter)
    .use(rehypeStringify)
    .process((await read(fullPath)).value);

    let contentHtml = String(file)

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    //...(file.data.matter as { date: string; title: string })
    ...{ date: "2023-07-08", title: "this works" }
  }
}