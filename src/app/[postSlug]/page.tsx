import React, { useEffect, useState } from "react";
import { loadBlogPost } from "@/utils/read-file";
import components from "@/utils/mdx";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostParams {
	postSlug: string;
}

interface BlogPostProps {
	params: BlogPostParams;
}

async function generateMetadata({ params }: BlogPostProps) {
	const { frontmatter } = await loadBlogPost(params.postSlug);

	return {
		title: `${frontmatter.title} | Dylan LaRocque`,
		description: frontmatter.abstract,
	};
}

export default async function BlogPost({
	params,
	...delegated
}: BlogPostProps) {
	const { frontmatter, content } = await loadBlogPost(params.postSlug);

	return (
		<section className="mx-auto py-12 px-8 max-w-[650px]">
			<h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
				{frontmatter.title}
			</h1>
			<div className="mt-1 flex items-center space-x-2">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					{frontmatter.publishedOn}
				</p>
			</div>
			<div className="mt-6"></div>
			<article className="prose prose-quoteless prose-neutral dark:prose-invert">
				<MDXRemote source={content} components={components} />
			</article>
			<Link className="text-blue-600 hover:underline" href="/blog">
				←
			</Link>
		</section>
	);
}
