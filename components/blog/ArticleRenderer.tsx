'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleRendererProps {
  content: string;
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-display prose-headings:text-navy
      prose-p:text-navy/80 prose-p:leading-relaxed
      prose-a:text-gold prose-a:no-underline hover:prose-a:underline
      prose-strong:text-navy
      prose-li:text-navy/80
      prose-blockquote:border-l-gold prose-blockquote:text-navy/60
      prose-code:text-navy prose-code:bg-navy/5 prose-code:px-1
      prose-img:rounded-none
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
