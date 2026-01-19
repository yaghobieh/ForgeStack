import { FC } from 'react';
import { TOKEN_COLORS } from '@constants/code.const';
import { SIZES } from '@constants/numbers.const';
import { TerminalCodeProps } from './types';

export const TerminalCode: FC<TerminalCodeProps> = ({
  tokenizedLines,
  displayedLines,
  className = '',
}) => {
  return (
    <div
      className={`forge-stack__terminal-code p-4 bg-[#1e1e1e] font-mono text-sm leading-relaxed overflow-hidden ${className}`}
      style={{ minHeight: SIZES.MIN_CODE_HEIGHT }}
    >
      <pre className="forge-stack__terminal-pre">
        <code className="forge-stack__terminal-code-content">
          {tokenizedLines.slice(SIZES.LOGO_SM - SIZES.LOGO_SM, displayedLines).map((tokens, lineIndex) => (
            <div key={lineIndex} className="forge-stack__terminal-line">
              <span
                className="forge-stack__terminal-line-number text-[#4e4e4e] select-none mr-4 inline-block text-right"
                style={{ width: `${SIZES.LINE_NUMBER_WIDTH * 4}px` }}
              >
                {lineIndex + 1}
              </span>
              {tokens.length === 0 ? (
                <br />
              ) : (
                tokens.map((token, tokenIndex) => (
                  <span
                    key={tokenIndex}
                    className={`forge-stack__terminal-token ${TOKEN_COLORS[token.type]}`}
                  >
                    {token.value}
                  </span>
                ))
              )}
            </div>
          ))}
          {displayedLines < tokenizedLines.length && (
            <div className="forge-stack__terminal-typing">
              <span
                className="forge-stack__terminal-line-number text-[#4e4e4e] select-none mr-4 inline-block text-right"
                style={{ width: `${SIZES.LINE_NUMBER_WIDTH * 4}px` }}
              >
                {displayedLines + 1}
              </span>
              <span className="forge-stack__terminal-cursor-block animate-pulse text-[#cc7832]">
                ▋
              </span>
            </div>
          )}
        </code>
      </pre>
    </div>
  );
};

