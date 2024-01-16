import BlogSummaryCard from "@/components/BlogSummaryCard";
import ModeToggle from "@/components/ThemeToggle/ThemeToggle";
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
      <div className="flex flex-row mt-2 mx-auto">
        <p>hello world</p>
        <ModeToggle />  
       </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-20">
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