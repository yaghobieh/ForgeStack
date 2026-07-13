import type { RibbonLibrary } from '@constants/ribbon.const';
import type { NpmPackageStats } from '@hooks/useNpmStats';

export interface RibbonSliceProps {
  library: RibbonLibrary;
  stats?: NpmPackageStats;
  onOpenDocs: (library: RibbonLibrary) => void;
  onSliceResized: () => void;
}
