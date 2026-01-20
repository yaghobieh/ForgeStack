import { FC, useState } from 'react';
import type { LivePreviewProps, PreviewViewMode } from './types';
import {
  COPY_FEEDBACK_DELAY,
  DEFAULT_ACCENT_COLOR,
  PREVIEW_SIZE_CONFIG,
  BACKGROUND_CLASSES,
  RESPONSIVE_SIZES,
  VIEW_MODE_ICONS,
  TOOLBAR_BUTTON_CLASSES,
  CODE_BLOCK_CLASSES,
} from './constants';

/**
 * LivePreview - Shows a component with its code side by side
 * Used in documentation to demonstrate components in action
 */
export const LivePreview: FC<LivePreviewProps> = ({
  children,
  code,
  title,
  description,
  background = 'dark',
  centered = true,
  accentColor = DEFAULT_ACCENT_COLOR,
  size = 'md',
  showLineNumbers = false,
  defaultView = 'preview',
  showFullscreen = false,
  showResponsive = false,
  className = '',
}) => {
  const [viewMode, setViewMode] = useState<PreviewViewMode>(defaultView === 'code' ? 'code' : 'preview');
  const [showCode, setShowCode] = useState(defaultView !== 'code');
  const [copied, setCopied] = useState(false);
  const [responsive, setResponsive] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const sizeConfig = PREVIEW_SIZE_CONFIG[size];
  const backgroundClass = BACKGROUND_CLASSES[background];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_FEEDBACK_DELAY);
  };

  const toggleCode = () => {
    setShowCode(!showCode);
    setViewMode(showCode ? 'code' : 'preview');
  };

  const getPreviewWidth = () => {
    if (!showResponsive || responsive === 'desktop') return '100%';
    return RESPONSIVE_SIZES[responsive].width;
  };

  const renderCodeWithLineNumbers = () => {
    if (!showLineNumbers) {
      return <code className={CODE_BLOCK_CLASSES.code}>{code}</code>;
    }

    const lines = code.split('\n');
    return (
      <code className={CODE_BLOCK_CLASSES.code}>
        {lines.map((line, index) => (
          <div key={index} className="flex">
            <span className="text-gray-600 select-none w-8 text-right pr-4">
              {index + 1}
            </span>
            <span>{line}</span>
          </div>
        ))}
      </code>
    );
  };

  return (
    <div className={`rounded-xl border border-gray-700 overflow-hidden bg-gray-900/50 mb-6 ${className}`}>
      {/* Header */}
      {(title || description) && (
        <div className="px-4 py-3 border-b border-gray-700">
          {title && (
            <h3 className="text-sm font-medium text-white">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-gray-400 mt-1">{description}</p>
          )}
        </div>
      )}

      {/* Preview Area */}
      <div
        className={`${sizeConfig.padding} ${backgroundClass} ${
          centered ? 'flex items-center justify-center' : ''
        }`}
        style={{ minHeight: sizeConfig.minHeight }}
      >
        <div
          className="transition-all duration-300"
          style={{ width: getPreviewWidth(), margin: responsive !== 'desktop' ? '0 auto' : undefined }}
        >
          {children}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-b border-gray-700 bg-gray-800/50">
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <button
            onClick={toggleCode}
            className={`${TOOLBAR_BUTTON_CLASSES.base} ${
              showCode ? TOOLBAR_BUTTON_CLASSES.active : TOOLBAR_BUTTON_CLASSES.inactive
            }`}
            style={showCode ? { backgroundColor: accentColor } : undefined}
          >
            {VIEW_MODE_ICONS.code}
          </button>
          <span className="text-xs text-gray-500">
            {showCode ? 'Hide Code' : 'Show Code'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Responsive Toggle */}
          {showResponsive && (
            <div className="flex items-center gap-1 mr-2">
              {(Object.keys(RESPONSIVE_SIZES) as Array<keyof typeof RESPONSIVE_SIZES>).map((key) => (
                <button
                  key={key}
                  onClick={() => setResponsive(key)}
                  className={`px-2 py-1 text-xs rounded ${
                    responsive === key
                      ? 'bg-gray-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  title={RESPONSIVE_SIZES[key].label}
                >
                  {RESPONSIVE_SIZES[key].label.split(' ')[0]}
                </button>
              ))}
            </div>
          )}

          {/* Fullscreen */}
          {showFullscreen && (
            <button
              className={`${TOOLBAR_BUTTON_CLASSES.base} ${TOOLBAR_BUTTON_CLASSES.inactive}`}
              title="Fullscreen"
            >
              ⛶
            </button>
          )}

          {/* Copy */}
          <button
            onClick={handleCopy}
            className={`${TOOLBAR_BUTTON_CLASSES.base} ${TOOLBAR_BUTTON_CLASSES.inactive}`}
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Code Area */}
      {showCode && (
        <div className={CODE_BLOCK_CLASSES.container}>
          <pre className={CODE_BLOCK_CLASSES.pre}>
            {renderCodeWithLineNumbers()}
          </pre>
        </div>
      )}
    </div>
  );
};
