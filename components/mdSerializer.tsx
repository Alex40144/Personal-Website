import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

const mdSerialize = async (source: string) => {
    return await serialize(source, {
        mdxOptions: { rehypePlugins: [rehypePrettyCode] },
    });
};

export { mdSerialize };