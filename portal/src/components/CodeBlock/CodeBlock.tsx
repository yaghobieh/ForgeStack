import { FC, useMemo, useState } from 'react';
import { CodeBlockProps } from './types';
import { TOKEN_COLORS, COPY_FEEDBACK_DURATION } from '@/constants/code.const';
import { tokenize } from '@/utils/tokenizer';

export const CodeBlock: FC<CodeBlockProps> = ({ 
  code, 
  filename, 
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);
  const tokenizedLines = useMemo(() => tokenize(code), [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`relative bg-gradient-to-b from-jet-900 to-[#0f0f1a] rounded-2xl border border-white/5 overflow-hidden group ${className}`}>

      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 opacity-0 group-hover:opacity-100 transition-all z-10"
        title="Copy code"
      >
        {copied ? (
          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>

      {filename && (
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-sm text-gray-500 font-mono">{filename}</span>
        </div>
      )}
      <div className="p-6 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          <code>
            {tokenizedLines.map((tokens, lineIndex) => (
              <div key={lineIndex}>
                {tokens.length === 0 ? (
                  <br />
                ) : (
                  tokens.map((token, tokenIndex) => (
                    <span key={tokenIndex} className={TOKEN_COLORS[token.type]}>
                      {token.value}
                    </span>
                  ))
                )}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};
