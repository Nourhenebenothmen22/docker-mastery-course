'use client';

import { useState } from 'react';
import type { DockerCommand } from '@/types';
import { WarningIcon, CopyIcon, CheckIcon } from '@/data/icons';

interface CommandCardProps {
  command: DockerCommand;
}

export default function CommandCard({ command }: CommandCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = command.command;
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
    <div className="glass-card p-5 group relative">
      <div className="relative mb-3">
        <div className="code-block pr-12">
          <code className="text-docker-300 text-sm leading-relaxed block whitespace-pre-wrap break-all">
            {command.command}
          </code>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          onKeyDown={handleKeyDown}
          className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md bg-dark-700 border border-white/10 text-gray-400 hover:text-docker-400 hover:border-docker-500/40 focus:outline-none focus:ring-2 focus:ring-docker-500/50 transition-all duration-200"
          aria-label={copied ? 'Command copied to clipboard' : 'Copy command to clipboard'}
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-3">
        {command.description}
      </p>

      <div className="code-block text-xs">
        <span className="text-gray-500">Example:</span>{' '}
        <code className="text-gray-300">{command.example}</code>
      </div>

      {command.warning && (
        <div className="mt-3 flex items-start gap-2 p-2.5 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
          <WarningIcon className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
          <p className="text-yellow-200 text-xs">{command.warning}</p>
        </div>
      )}
    </div>
  );
}
