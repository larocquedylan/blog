import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";

interface blogPostList {
	slug: string;
	abstract: string;
	publishedOn: string;
	title: string;
}

export async function getBlogPostList() {
	const fileNames = await readDirectory("/content");
	const blogPosts: blogPostList[] = [];

	for (let fileName of fileNames) {
		const rawContent = await readFile(`/content/${fileName}`);
		const { data: frontmatter } = matter(rawContent);

		blogPosts.push({
			slug: fileName.replace(".mdx", ""),
			abstract: frontmatter.abstract,
			publishedOn: frontmatter.publishedOn,
			title: frontmatter.title,
		});
	}
	return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

// cache the result
export const loadBlogPost = React.cache(async function loadBlogPost(
	slug: string,
) {
	const rawContent = await readFile(`/content/${slug}.mdx`);
	const { data: frontmatter, content } = matter(rawContent);
	return { frontmatter, content };
});

function readFile(localPath: string) {
	return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
