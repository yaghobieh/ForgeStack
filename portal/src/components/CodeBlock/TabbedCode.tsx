import { FC, useState } from 'react';
import { TabbedCodeProps, Framework } from './types';
import { CodeBlock } from './CodeBlock';
import { getFrameworkIcon } from './FrameworkIcons';

/**
 * TabbedCode - Display code examples with framework tabs (React, Vue, Angular, Vanilla, etc.)
 * Similar to TanStack Table documentation style
 */
export const TabbedCode: FC<TabbedCodeProps> = ({ 
  examples, 
  defaultTab = 0,
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const getTabColor = (framework: Framework, isActive: boolean): string => {
    if (!isActive) return 'text-theme-muted hover:text-theme-secondary';
    
    // Return the active color based on framework
    switch (framework) {
      case 'react': return 'text-[#61DAFB]';
      case 'vue': return 'text-[#42B883]';
      case 'angular': return 'text-[#DD0031]';
      case 'vanilla': return 'text-[#F7DF1E]';
      case 'svelte': return 'text-[#FF3E00]';
      case 'solid': return 'text-[#2C4F7C]';
      case 'qwik': return 'text-[#18B6F6]';
      case 'lit': return 'text-[#325CFF]';
      default: return 'text-theme-primary';
    }
  };

  const getTabBg = (framework: Framework, isActive: boolean): string => {
    if (!isActive) return '';
    
    // Return subtle background when active
    switch (framework) {
      case 'react': return 'bg-[#61DAFB]/10';
      case 'vue': return 'bg-[#42B883]/10';
      case 'angular': return 'bg-[#DD0031]/10';
      case 'vanilla': return 'bg-[#F7DF1E]/10';
      case 'svelte': return 'bg-[#FF3E00]/10';
      case 'solid': return 'bg-[#2C4F7C]/10';
      case 'qwik': return 'bg-[#18B6F6]/10';
      case 'lit': return 'bg-[#325CFF]/10';
      default: return 'bg-theme-secondary';
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden border border-theme-border bg-[#1a1a2e] ${className}`}>
      {/* Tab Header */}
      <div className="flex items-center gap-1 px-4 py-3 bg-[#16162a] border-b border-theme-border overflow-x-auto">
        {examples.map((example, idx) => {
          const Icon = getFrameworkIcon(example.framework);
          const isActive = activeTab === idx;
          
          return (
            <button
              key={`${example.framework}-${idx}`}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                getTabColor(example.framework, isActive)
              } ${getTabBg(example.framework, isActive)}`}
            >
              <Icon className="w-4 h-4" />
              <span>{example.label}</span>
            </button>
          );
        })}
      </div>
      
      {/* Code Content */}
      <div className="p-0">
        <CodeBlock 
          code={examples[activeTab].code} 
          filename={examples[activeTab].filename}
        />
      </div>
    </div>
  );
};

export default TabbedCode;

