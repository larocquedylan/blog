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
		<section className="flex flex-col mx-auto py-20">
			<div className="grid grid-cols-1 gap-4 p-4 m-auto w-[330px]">
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
