import { Token } from '../CodeBlock/types';

export interface TerminalCodeProps {
  tokenizedLines: Token[][];
  displayedLines: number;
  className?: string;
}

