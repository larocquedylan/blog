import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/utils/read-file";
import COMPONENT_MAP from "@/utils/mdx-component-map";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogPostParams {
	postSlug: string;
}

interface BlogPostProps {
	params: BlogPostParams;
}

export default async function BlogPost({
	params,
	...delegated
}: BlogPostProps) {
	const { frontmatter, content } = await loadBlogPost(params.postSlug);

	return (
		<div className="max-w-4xl mx-auto p-8">
			<Link className="text-blue-600 hover:underline" href="/blog">
				← All Articles
			</Link>
			<h1 className="mt-8 text-5xl font-bold leading-tight">
				{frontmatter.title}
			</h1>
			<div className="mt-8 flex items-center space-x-2"></div>
			<div>
				<div className="text-sm font-semibold">Dylan LaRocque</div>
				<div className="text-sm text-gray-500">{frontmatter.publishedOn}</div>
			</div>
			<Avatar>
				<AvatarImage alt="dale" />
				<AvatarFallback>JH</AvatarFallback>
			</Avatar>
			<div className="mt-10"></div>
			<MDXRemote source={content} components={COMPONENT_MAP} />
		</div>
	);
}
