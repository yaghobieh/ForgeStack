export type BadgeVariant = 'NEW' | 'BETA' | 'ALPHA' | 'SOON';

export interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
  showIcon?: boolean;
}

