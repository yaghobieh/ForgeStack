import { ReactNode } from 'react';

/** Background style options for the preview area */
export type PreviewBackground = 'dark' | 'light' | 'checker' | 'transparent' | 'gradient' | 'dots';

/** Preview size options */
export type PreviewSize = 'sm' | 'md' | 'lg' | 'xl' | 'auto';

/** Code language for syntax highlighting */
export type CodeLanguage = 'tsx' | 'jsx' | 'typescript' | 'javascript' | 'css' | 'html' | 'json' | 'bash';

/** View mode for the preview */
export type PreviewViewMode = 'preview' | 'code' | 'split';

export interface LivePreviewProps {
  /** The live component to display */
  children: ReactNode;
  /** The code to display */
  code: string;
  /** Title for the preview */
  title?: string;
  /** Description */
  description?: string;
  /** Background style */
  background?: PreviewBackground;
  /** Whether to center the content */
  centered?: boolean;
  /** Brand color for accents */
  accentColor?: string;
  /** Preview size */
  size?: PreviewSize;
  /** Code language */
  language?: CodeLanguage;
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Initial view mode */
  defaultView?: PreviewViewMode;
  /** Show fullscreen button */
  showFullscreen?: boolean;
  /** Show responsive toggle */
  showResponsive?: boolean;
  /** Custom className */
  className?: string;
}

export interface PreviewToolbarProps {
  showCode: boolean;
  onToggleCode: () => void;
  copied: boolean;
  onCopy: () => void;
  accentColor: string;
  viewMode: PreviewViewMode;
  onViewModeChange: (mode: PreviewViewMode) => void;
  showFullscreen?: boolean;
  showResponsive?: boolean;
  onFullscreen?: () => void;
  responsive?: 'mobile' | 'tablet' | 'desktop';
  onResponsiveChange?: (size: 'mobile' | 'tablet' | 'desktop') => void;
}

