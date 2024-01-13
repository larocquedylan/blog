import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getBlogPostList() {
    const fileNames = await readDirectory('/content');
  
    const blogPosts: any = [];
  
    for (let fileName of fileNames) {
      const rawContent = await readFile(`/content/${fileName}`);
      const { data: frontmatter } = matter(rawContent);
  
      // Correct the date format right after reading the front matter
      const publishedOnCorrected = toISO8601(frontmatter.publishedOn);
  
      blogPosts.push({
        slug: fileName.replace('.mdx', ''),
        ...frontmatter,
        publishedOn: publishedOnCorrected, // Store the corrected date
      });
    }
  
    return blogPosts.sort((p1, p2) =>
      p1.publishedOn < p2.publishedOn ? 1 : -1
    );
  }
  
  function toISO8601(dateString: string) {
    // Make sure this function correctly formats your date strings
    // Add validation or defaulting if necessary
    return dateString.replace(/(\d{4}-\d{2}-\d{2})-(\d{2}T\d{2}:\d{2}:\d{2})(-0400)/, '$1$2-04:00');
  }

export async function loadBlogPost(slug: any) {
  const rawContent = await readFile(
    `/content/${slug}.mdx`
  );
  console.log(rawContent)

  const { data: frontmatter, content } =
    matter(rawContent);
  console.log(frontmatter, content)  

  return { frontmatter, content };
}

function readFile(localPath: string) {
  return fs.readFile(
    path.join(process.cwd(), localPath),
    'utf8'
  );
}

function readDirectory(localPath: string) {
  return fs.readdir(
    path.join(process.cwd(), localPath)
  );
}
