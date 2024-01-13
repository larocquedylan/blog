import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/utils/read-file";
import Link from "next/link";

type FrontMatter = {
  slug: string,
  title: string,
  abstract: string,
  publishedOn: string,
}

async function Home() {
  const blogPosts =  await getBlogPostList();

  return (
    <section className="flex flex-col mx-auto">
      <div className="flex mt-2 mx-auto"> hello world</div>
      <Link
        className="mt-3 inline-flex items-center font-semibold text-blue-600 hover:underline dark:text-blue-400"
        href="#"
      >
        Read More
      </Link>
      <div className="flex flex-col items-center">
      {blogPosts.map(({slug, title, abstract, publishedOn}: FrontMatter) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          title = {title}
          abstract={abstract}
          publishedOn={publishedOn}
        />
      ))}
    </div>
  </section>
  )
}

export default Home;