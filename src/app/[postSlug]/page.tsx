import React from 'react';
import BlogHero from '@/components/BlogHero';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadBlogPost } from '@/utils/read-file';
import COMPONENT_MAP from '@/utils/mdx-component-map';



async function BlogPost({params}) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug)

  return (
    <article className='flex flex-col mx-20'>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className='border rounded-lg border-fuchsia-900 p-4'>
       <MDXRemote 
        source={content} 
        components={COMPONENT_MAP}
       />
      </div>
    </article>
  );
}

export default BlogPost;