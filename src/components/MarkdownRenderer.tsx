import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content?: string;
  filePath?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, filePath }) => {
  const [markdown, setMarkdown] = useState<string>(content || '');
  const [loading, setLoading] = useState<boolean>(!!filePath);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (filePath) {
      fetch(filePath)
        .then(response => {
          if (!response.ok) throw new Error('File not found');
          return response.text();
        })
        .then(text => {
          const processedText = preprocessMarkdown(text);
          setMarkdown(processedText);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading markdown:', err);
          setError('Nie udało się załadować pliku.');
          setLoading(false);
        });
    }
  }, [filePath]);

  const preprocessMarkdown = (text: string): string => {
    let processed = text.replace(/\r\n/g, '\n');

    processed = processed.replace(/<br><br>/g, '<br>');

    const lines = processed.split('\n');
    const processedLines: string[] = [];
    let inTable = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        inTable = true;
        processedLines.push(line);
      }
      else if (inTable) {
        if (line.trim() === '') {
          inTable = false;
          processedLines.push(line);
        }
        else if (line.trim().startsWith('|')) {
          processedLines.push(line);
        }
        else if (line.includes('---')) {
          processedLines.push(line);
        }
        else {
          inTable = false;
          processedLines.push(line);
        }
      }
      else {
        processedLines.push(line);
      }
    }

    return processedLines.join('\n');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-gray-400">Ładowanie...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="markdown-content prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-white" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-4 mb-2 text-white" {...props} />,
          h4: ({node, ...props}) => <h4 className="text-lg font-semibold mt-3 mb-2 text-gray-200" {...props} />,
          p: ({node, ...props}) => <p className="mb-4 text-gray-300 leading-relaxed" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300" {...props} />,
          li: ({node, ...props}) => <li className="ml-4" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-900/20 italic text-gray-300" {...props} />
          ),
          code: ({node, inline, ...props}: any) =>
            inline ? (
              <code className="bg-gray-800 px-2 py-1 rounded text-sm text-blue-300 font-mono" {...props} />
            ) : (
              <code className="block bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm text-gray-200 font-mono my-4" {...props} />
            ),
          pre: ({node, ...props}) => <pre className="my-4" {...props} />,
          table: ({node, ...props}) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-700 rounded-lg" {...props} />
            </div>
          ),
          thead: ({node, ...props}) => <thead className="bg-gray-800" {...props} />,
          tbody: ({node, ...props}) => <tbody className="divide-y divide-gray-700" {...props} />,
          tr: ({node, ...props}) => <tr className="hover:bg-gray-800/50" {...props} />,
          th: ({node, ...props}) => (
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200 border-b border-gray-700 align-top" {...props} />
          ),
          td: ({node, ...props}) => (
            <td className="px-4 py-3 text-sm text-gray-300 align-top" style={{whiteSpace: 'normal', wordBreak: 'break-word'}} {...props} />
          ),
          a: ({node, ...props}) => (
            <a className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          hr: ({node, ...props}) => <hr className="my-8 border-gray-700" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
          em: ({node, ...props}) => <em className="italic text-gray-200" {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;


