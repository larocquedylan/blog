import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

type FrontMatter = {
  slug: string,
  title: string,
  publishedOn: string,
  abstract: string,
}

function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
}: FrontMatter) {
  const href = `/${slug}`;

  return (
    <Link href={href} className=''>
      <Card className="w-full max-w-md h-[30vh] shadow-sm dark:bg-black dark:hover:shadow-blue-900 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ">
        <CardHeader>
          <CardTitle className='text-lg dark:text-blue-700'>{title}</CardTitle>
          <CardDescription> </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{abstract} {' '}</p>
        </CardContent>
        <CardFooter className="p-0 flex justify-between items-center">
          <p className="text-xs px-8"><time dateTime={publishedOn}>{publishedOn}</time></p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default BlogSummaryCard;