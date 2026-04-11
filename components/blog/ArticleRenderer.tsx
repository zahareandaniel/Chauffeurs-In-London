'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleRendererProps {
  content: string;
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  return (
    <div
      className="prose prose-lg max-w-readable prose-headings:font-display prose-headings:font-medium
      prose-p:text-ink-muted prose-p:leading-[1.78]
      prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline
      prose-strong:text-ink prose-strong:font-semibold
      prose-li:text-ink-muted
      prose-blockquote:border-l-ink/25 prose-blockquote:bg-paper-warm prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
      prose-code:text-ink prose-code:bg-paper-warm prose-code:px-1 prose-code:py-0.5 prose-code:text-sm
      prose-img:rounded-none prose-hr:border-line
    "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
