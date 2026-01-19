export interface PackageRow {
  id: string;
  name: string;
  icon: string;
  title: string;
  npmPackage: string;
  version: string;
  status: 'ready' | 'coming-soon' | 'planned';
  color: string;
  description: string;
}

export interface PackagesTableProps {
  className?: string;
}

export interface VersionBadgeProps {
  version: string;
  status: 'ready' | 'coming-soon' | 'planned';
  color: string;
  onVersionClick?: () => void;
}

