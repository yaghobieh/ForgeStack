import { FC, useState, useEffect } from 'react';
import { CODE_EXAMPLES, TIMING } from '@constants';
import { tokenize } from '@utils';
import { TerminalCode } from '@components/TerminalCode';
import { CodeCarouselProps } from './types';

export const CodeCarousel: FC<CodeCarouselProps> = ({ className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayedLines, setDisplayedLines] = useState(0);

  const activeExample = CODE_EXAMPLES[activeIndex];
  const tokenizedLines = tokenize(activeExample.code);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CODE_EXAMPLES.length);
      setDisplayedLines(0);
    }, TIMING.CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (displayedLines >= tokenizedLines.length) return;

    const timer = setTimeout(() => {
      setDisplayedLines((prev) => prev + 1);
    }, TIMING.TYPEWRITER_DELAY);

    return () => clearTimeout(timer);
  }, [displayedLines, tokenizedLines.length]);

  useEffect(() => {
    setDisplayedLines(0);
  }, [activeIndex]);

  return (
    <div
      className={`forge-stack__terminal ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="forge-stack__terminal-frame relative bg-[#0d0d0d] rounded-lg border-4 border-[#2a2a2a] p-1 shadow-[0_0_60px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="forge-stack__terminal-bezel bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-lg overflow-hidden">
          <div
            className="forge-stack__terminal-scanlines absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
            }}
          />

          <div
            className="forge-stack__terminal-curve absolute inset-0 pointer-events-none z-10 rounded-lg"
            style={{ boxShadow: 'inset 0 0 100px 20px rgba(0,0,0,0.5)' }}
          />

          <div className="forge-stack__terminal-header flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-[#333]">
            <div className="forge-stack__terminal-header-left flex items-center gap-3">
              <div className="forge-stack__terminal-dots flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27ca40]" />
              </div>
              <span className="forge-stack__terminal-title font-mono text-xs text-[#808080]">
                forgestack://terminal
              </span>
            </div>
            <div className="forge-stack__terminal-header-right flex items-center gap-2">
              <span
                className="forge-stack__terminal-package font-mono text-xs px-2 py-0.5 rounded"
                style={{
                  color: activeExample.color,
                  backgroundColor: `${activeExample.color}15`,
                  border: `1px solid ${activeExample.color}30`,
                }}
              >
                {activeExample.package}
              </span>
            </div>
          </div>

          <div className="forge-stack__terminal-prompt px-4 py-2 bg-[#1a1a1a] border-b border-[#292929] font-mono text-sm">
            <span className="forge-stack__terminal-prompt-user text-[#6a8759]">forge</span>
            <span className="forge-stack__terminal-prompt-at text-[#808080]">@</span>
            <span className="forge-stack__terminal-prompt-host text-[#cc7832]">stack</span>
            <span className="forge-stack__terminal-prompt-colon text-[#808080]">:</span>
            <span className="forge-stack__terminal-prompt-path text-[#6897bb]">
              ~/{activeExample.filename}
            </span>
            <span className="forge-stack__terminal-prompt-dollar text-[#808080]"> $ </span>
            <span className="forge-stack__terminal-prompt-cmd text-[#a9b7c6]">
              npm i {activeExample.package}
            </span>
            <span className="forge-stack__terminal-cursor animate-pulse text-[#cc7832]">▋</span>
          </div>

          <div className="forge-stack__terminal-status px-4 py-2 bg-[#252526] border-b border-[#3c3c3c]">
            <div className="forge-stack__terminal-status-content flex items-center gap-2">
              <span
                className="forge-stack__terminal-status-dot w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: activeExample.color }}
              />
              <span className="forge-stack__terminal-status-title font-mono text-sm text-white">
                {activeExample.title}
              </span>
              <span className="forge-stack__terminal-status-sep text-[#4e4e4e]">—</span>
              <span className="forge-stack__terminal-status-desc font-mono text-xs text-[#808080]">
                {activeExample.description}
              </span>
            </div>
          </div>

          <TerminalCode tokenizedLines={tokenizedLines} displayedLines={displayedLines} />

          <div className="forge-stack__terminal-footer px-4 py-2 bg-[#007acc] flex items-center justify-between">
            <div className="forge-stack__terminal-footer-left flex items-center gap-4 text-white text-xs font-mono">
              <span>{activeExample.packageName}</span>
              <span className="opacity-60">|</span>
              <span className="opacity-60">{activeExample.filename}</span>
            </div>
            <div className="forge-stack__terminal-footer-right flex items-center gap-4 text-white text-xs font-mono opacity-60">
              <span>TypeScript</span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>
      </div>


      <div className="forge-stack__nav mt-6 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max px-2 justify-center">
          {CODE_EXAMPLES.map((example, index) => (
            <button
              key={example.id}
              onClick={() => {
                setActiveIndex(index);
                setDisplayedLines(0);
              }}
              className={`forge-stack__nav-btn flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all whitespace-nowrap ${
                index === activeIndex 
                  ? 'text-white shadow-lg' 
                  : 'text-[#808080] hover:text-white bg-[#1a1a1a] hover:bg-[#252525]'
              }`}
              style={{
                backgroundColor: index === activeIndex ? example.color : undefined,
              }}
            >
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${index === activeIndex ? 'bg-white' : ''}`}
                style={{ backgroundColor: index !== activeIndex ? example.color : undefined }}
              />
              <span className="hidden sm:inline">{example.title}</span>
            </button>
          ))}
        </div>
      </div>


      <div className="forge-stack__progress flex justify-center gap-1.5 mt-3">
        {CODE_EXAMPLES.map((example, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setDisplayedLines(0);
            }}
            className="forge-stack__progress-dot p-1 group"
            title={example.title}
          >
            <span
              className={`block rounded-full transition-all ${
                index === activeIndex ? 'w-6 h-1.5' : 'w-1.5 h-1.5 group-hover:scale-125'
              }`}
              style={{ backgroundColor: index === activeIndex ? example.color : '#4e4e4e' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
