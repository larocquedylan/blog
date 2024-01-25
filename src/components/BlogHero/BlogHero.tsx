type props = {
  title: string,
  publishedOn: string,
}

function BlogHero({
  title,
  publishedOn,
  ...delegated
}: props) {
  // const humanizedDate = format(
  //   new Date(publishedOn),
  //   'MMMM do, yyyy'
  // );

  return (
    <header
      className=''
      {...delegated}
    >
      <div >
        <h1>{title}</h1>
        <p>
          Published on{' '}
          <time dateTime={publishedOn}>
            {publishedOn}
          </time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
