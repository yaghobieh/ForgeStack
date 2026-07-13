import { FC, ReactNode, Fragment } from 'react';
import { CodeBlock } from '../CodeBlock';

interface MarkdownProps {
  content: string;
}

const INLINE_PATTERN = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

const renderInline = (text: string): ReactNode =>
  text.split(INLINE_PATTERN).map((part, index) => {
    if (!part) return null;
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="fs-md__code">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{renderInline(part.slice(2, -2))}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{renderInline(part.slice(1, -1))}</em>;
    }
    const link = part.match(LINK_PATTERN);
    if (link) {
      const [, label, href] = link;
      const isExternal = href.startsWith('http');
      return (
        <a
          key={index}
          href={href}
          className="fs-md__link"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {renderInline(label)}
        </a>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });

interface Block {
  type: 'h2' | 'h3' | 'h4' | 'p' | 'ul' | 'ol' | 'quote' | 'hr' | 'code';
  text?: string;
  items?: string[];
  code?: string;
  language?: string;
}

const parseBlocks = (content: string): Block[] => {
  const lines = content.split('\n');
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let index = 0;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
  };

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushParagraph();
      const language = trimmed.slice(3).trim() || undefined;
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: 'code', code: codeLines.join('\n'), language });
      index += 1;
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      index += 1;
      continue;
    }
    if (trimmed === '---') {
      flushParagraph();
      blocks.push({ type: 'hr' });
      index += 1;
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      flushParagraph();
      blocks.push({ type: 'h4', text: trimmed.slice(5) });
      index += 1;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      blocks.push({ type: 'h3', text: trimmed.slice(4) });
      index += 1;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      blocks.push({ type: 'h2', text: trimmed.slice(3) });
      index += 1;
      continue;
    }
    if (trimmed.startsWith('> ')) {
      flushParagraph();
      blocks.push({ type: 'quote', text: trimmed.slice(2) });
      index += 1;
      continue;
    }
    if (trimmed.startsWith('- ')) {
      flushParagraph();
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }
    if (/^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ''));
        index += 1;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    paragraph.push(trimmed);
    index += 1;
  }

  flushParagraph();
  return blocks;
};

/** Lightweight markdown renderer for blog articles — headings, lists, code fences, quotes, inline styles. */
export const Markdown: FC<MarkdownProps> = ({ content }) => {
  const blocks = parseBlocks(content);

  return (
    <div className="fs-md">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={index} className="fs-md__h2">{renderInline(block.text ?? '')}</h2>;
          case 'h3':
            return <h3 key={index} className="fs-md__h3">{renderInline(block.text ?? '')}</h3>;
          case 'h4':
            return <h4 key={index} className="fs-md__h4">{renderInline(block.text ?? '')}</h4>;
          case 'quote':
            return <blockquote key={index} className="fs-md__quote">{renderInline(block.text ?? '')}</blockquote>;
          case 'hr':
            return <hr key={index} className="fs-md__hr" />;
          case 'ul':
            return (
              <ul key={index} className="fs-md__list">
                {block.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={index} className="fs-md__list fs-md__list--ordered">
                {block.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case 'code':
            return (
              <div key={index} className="fs-md__codeblock">
                <CodeBlock code={block.code ?? ''} language={block.language} />
              </div>
            );
          default:
            return <p key={index} className="fs-md__p">{renderInline(block.text ?? '')}</p>;
        }
      })}
    </div>
  );
};
