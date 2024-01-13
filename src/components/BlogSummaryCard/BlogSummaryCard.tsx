import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import Card from '@/components/Card';

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
    <Card className='bg-cyan-400'>
      <Link href={href} className=''>
        {title}
      </Link>
      <time dateTime={publishedOn}>{publishedOn}</time>
      <p>
        {abstract}{' '}
      </p>
    </Card>
  );
}

export default BlogSummaryCard;