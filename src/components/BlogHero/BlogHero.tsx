type props = {
  title: string;
  publishedOn: string;
};

function BlogHero({ title, publishedOn, ...delegated }: props) {
  return (
    <header className="bg-black" {...delegated}>
      <div>
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{publishedOn}</time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
