// CodeBlock component types

export interface CodeBlockProps {
  code: string;
  filename?: string;
  className?: string;
  showLineNumbers?: boolean;
  language?: string; // e.g., 'typescript', 'json', 'bash'
}

export type TokenType = 'keyword' | 'string' | 'comment' | 'number' | 'function' | 'property' | 'operator' | 'punctuation' | 'text';

export interface Token {
  type: TokenType;
  value: string;
}

// Framework icon props
export interface FrameworkIconProps {
  className?: string;
  size?: number;
}

// Supported frameworks for tabbed code
export type Framework = 'react' | 'vue' | 'angular' | 'vanilla' | 'svelte' | 'solid' | 'qwik' | 'lit';

// Single code example for TabbedCode
export interface CodeExample {
  framework: Framework;
  label: string;
  code: string;
  filename?: string;
}

// TabbedCode component props
export interface TabbedCodeProps {
  examples: CodeExample[];
  defaultTab?: number;
  className?: string;
}
