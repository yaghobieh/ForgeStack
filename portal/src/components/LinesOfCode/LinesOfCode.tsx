import { FC } from 'react';

export interface LinesOfCodeProps {
  lines: number;
  className?: string;
}

const getCubeColor = (lines: number): string => {
  if (lines < 100) return 'bg-green-500';
  if (lines < 200) return 'bg-yellow-500';
  if (lines < 500) return 'bg-orange-500';
  return 'bg-red-500';
};

export const LinesOfCode: FC<LinesOfCodeProps> = ({ lines, className = '' }) => {
  const cubeColor = getCubeColor(lines);

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs font-medium ${className}`}>
      <span className={`w-2.5 h-2.5 rounded-sm ${cubeColor}`} />
      <span className="text-gray-500 dark:text-gray-400">+{lines}</span>
    </div>
  );
};

