'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from '@/data/icons';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCopy();
    }
  };

  return (
    <div className="glass-card overflow-hidden">
      {(title || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-dark-800 border-b border-white/5">
          <span className="text-xs text-gray-400 uppercase tracking-wider">{title || language}</span>
          <button
            type="button"
            onClick={handleCopy}
            onKeyDown={handleKeyDown}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-docker-400 transition-colors focus:outline-none focus:ring-2 focus:ring-docker-500/50 rounded px-2 py-1"
            aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
          >
            {copied ? (
              <>
                <CheckIcon />
                Copied
              </>
            ) : (
              <>
                <CopyIcon />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <div className="code-block border-0 rounded-none">
        <pre className="text-gray-200 text-sm leading-relaxed overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
