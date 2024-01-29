import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/utils/read-file";

interface blogPostArray {
	slug: string;
	abstract: string;
	publishedOn: string;
	title: string;
}

export default async function BlogPage() {
	const blogPosts = await getBlogPostList();

	return (
		<section className="flex flex-col mx-auto">
			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-20">
				{blogPosts.map(
					({ slug, title, abstract, publishedOn }: blogPostArray) => (
						<BlogSummaryCard
							key={slug}
							slug={slug}
							title={title}
							abstract={abstract}
							publishedOn={publishedOn}
						/>
					),
				)}
			</div>
		</section>
	);
}
