import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { fileUrl } from '../lib/notes';

interface Props {
  content: string;
  notePath: string;
  attachments: Record<string, string>;
}

function joinPath(dir: string, rel: string): string {
  const parts = `${dir}/${rel}`.split('/');
  const out: string[] = [];
  for (const p of parts) {
    if (p === '' || p === '.') continue;
    if (p === '..') out.pop();
    else out.push(p);
  }
  return out.join('/');
}

function preprocess(text: string): string {
  let out = text.replace(/\r\n/g, '\n');

  out = out.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_m, target, alt) => {
    return `![${(alt || '').trim()}](${target.trim()})`;
  });

  out = out.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_m, target, label) => {
    return (label || target).trim();
  });

  return out;
}

const MarkdownRenderer: React.FC<Props> = ({ content, notePath, attachments }) => {
  const dir = notePath.includes('/') ? notePath.slice(0, notePath.lastIndexOf('/')) : '';

  const resolveImage = (src?: string): string | undefined => {
    if (!src) return src;
    if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:') || src.startsWith('/')) {
      return src;
    }
    const clean = src.replace(/^\.\//, '');
    const basename = clean.split('/').pop() as string;
    if (!clean.includes('/') && attachments[basename]) {
      return fileUrl(attachments[basename]);
    }
    if (attachments[basename]) return fileUrl(attachments[basename]);
    return fileUrl(joinPath(dir, clean));
  };

  return (
    <div className="note-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ node, src, alt, ...props }) => (
            <img src={resolveImage(src as string)} alt={alt || ''} loading="lazy" {...props} />
          ),
          a: ({ node, href, ...props }) => {
            const external = href && /^(https?:)?\/\//i.test(href);
            return (
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                {...props}
              />
            );
          },
        }}
      >
        {preprocess(content)}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
