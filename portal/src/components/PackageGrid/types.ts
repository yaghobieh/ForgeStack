export interface PackageCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  status: 'ready' | 'coming-soon' | 'planned';
  features: string[];
  color: string;
  docsPath: string;
}

