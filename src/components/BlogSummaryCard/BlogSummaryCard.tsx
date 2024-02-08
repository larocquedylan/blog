import React from "react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

interface blogPostArray {
	slug: string;
	abstract: string;
	publishedOn: string;
	title: string;
}

function BlogSummaryCard({
	slug,
	title,
	publishedOn,
	abstract,
}: blogPostArray) {
	const href = `/${slug}`;

	return (
		<Link href={href} className="">
			<p className="dark:text-white dark:hover:text-gray-500 transform hover:-translate-y-1 transition-all duration-200">
				{title}
			</p>
		</Link>
	);
}

export default BlogSummaryCard;
