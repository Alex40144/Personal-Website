import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function PostCard({
    post,
    index
}: {
    post: any,
    index: any
}) {
    return (
        <Link href={'/posts/' + post.slug} passHref>
            <div className="m-4 p-6 text-left text-inherit border border-gray-300 rounded-xl w-full cursor-pointer transition-colors duration-300 ease-in hover:border-blue-500 hover:text-blue-500 flex">
                <div className="flex w-1/2">
                    <div className="">
                        <h5 className="">{post.frontMatter.title}</h5>
                        <p className="">
                            <small className="">{post.frontMatter.date}</small>
                        </p>
                    </div>
                </div>
                <div className="flex w-1/2 justify-end">
                    {post.frontMatter.thumbnailUrl && (
                        <Image
                            src={post.frontMatter.thumbnailUrl}
                            className="img-fluid mt-1 rounded-start"
                            alt="thumbnail"
                            width={250}
                            height={200}
                            objectFit="cover"
                        />
                    )}

                </div>
            </div>
        </Link >
    )
}