import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PACKAGES } from '@constants';
import { SIDEBAR_SECTIONS, PACKAGE_BADGES, SHOWCASE_REPOS, SidebarLink } from '@constants/sidebar.const';
import { usePackageTheme } from '../../context/ThemeContext';
import { Badge } from '../Badge';
import { 
  GitHubIcon, 
  EmailIcon, 
  NpmIcon, 
  BookIcon, 
  BlogIcon, 
  SparklesIcon, 
  PaletteIcon, 
  PackageIcon, 
  ExternalLinkIcon,
  ChevronDownIcon,
  CloseIcon,
  ExtensionIcon,
  RobotIcon
} from '../Icons';
import { SidebarProps } from './types';

const ICON_MAP: Record<string, FC<{ className?: string; size?: number }>> = {
  github: GitHubIcon,
  email: EmailIcon,
  npm: NpmIcon,
  book: BookIcon,
  blog: BlogIcon,
  sparkles: SparklesIcon,
  palette: PaletteIcon,
  package: PackageIcon,
  external: ExternalLinkIcon,
  extension: ExtensionIcon,
  robot: RobotIcon,
};

const SidebarIcon: FC<{ name?: SidebarLink['iconName']; className?: string }> = ({ name, className }) => {
  if (!name) return null;
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={16} />;
};

export const Sidebar: FC<SidebarProps> = ({ className = '', isOpen = true, onClose }) => {
  const location = useLocation();
  const { activePackage, setActivePackageId, primaryColor } = usePackageTheme();
  const [showShowcase, setShowShowcase] = useState(false);

  const isPackageActive = (pkgId: string) => {
    return location.pathname.includes(`/${pkgId}`);
  };

  const handlePackageClick = (pkgId: string) => {
    setActivePackageId(pkgId);
  };

  return (
    <aside 
      className={`forge-stack__sidebar w-56 h-[calc(100vh-4rem)] bg-theme-secondary border-r border-theme-border flex flex-col min-h-0 transition-transform duration-300 ${className} ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-lg hover:bg-theme-tertiary lg:hidden"
        >
          <CloseIcon className="w-5 h-5 text-theme-muted" />
        </button>
      )}

      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="forge-stack__sidebar-packages p-4 pt-10 lg:pt-4">
        <nav className="space-y-1">
          {PACKAGES.map((pkg) => {
            const badge = PACKAGE_BADGES[pkg.id];
            const isActive = isPackageActive(pkg.id) || activePackage?.id === pkg.id;
            
            // CLI links directly to /cli, others use /package/docs/quick-start pattern
            const linkPath = pkg.status === 'ready' 
              ? (pkg.id === 'cli' ? pkg.docsPath : `${pkg.docsPath}/docs/quick-start`)
              : '#';
            
            return (
              <Link
                key={pkg.id}
                to={linkPath}
                onClick={() => handlePackageClick(pkg.id)}
                className={`forge-stack__sidebar-link group flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
                } ${pkg.status !== 'ready' ? 'opacity-60 cursor-not-allowed' : ''}`}
                style={{
                  backgroundColor: isActive ? `${pkg.color}20` : undefined,
                  borderLeft: isActive ? `3px solid ${pkg.color}` : '3px solid transparent',
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: pkg.color }}
                  />
                  <span>{pkg.name}</span>
                </div>
                {badge && <Badge variant={badge} />}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-theme-border mx-4" />

      <div className="forge-stack__sidebar-showcase p-4">
          <Link
          to="/showcase"
          className="forge-stack__sidebar-link flex items-center gap-2 px-3 py-2.5 text-base font-medium text-theme-secondary hover:text-theme-primary w-full text-left rounded-lg hover:bg-theme-tertiary transition-colors"
        >
          <PackageIcon size={16} />
          <span>Showcase</span>
        </Link>

        <button
          className="forge-stack__sidebar-link flex items-center gap-2 px-3 py-2.5 text-base font-medium text-theme-secondary hover:text-theme-primary w-full text-left rounded-lg hover:bg-theme-tertiary transition-colors"
          onClick={() => setShowShowcase(!showShowcase)}
        >
          <GitHubIcon size={14} />
          <span>Projects</span>
          <ChevronDownIcon 
            className={`w-4 h-4 ml-auto transition-transform ${showShowcase ? 'rotate-180' : ''}`}
          />
        </button>

        {showShowcase && (
          <div className="mt-2 ml-3 space-y-1">
            {SHOWCASE_REPOS.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-theme-muted hover:text-theme-primary transition-colors"
              >
                <ExternalLinkIcon size={12} />
                <span>{repo.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-theme-border mx-4" />

      {SIDEBAR_SECTIONS.map((section) => (
        <div key={section.id} className="p-4">
          {section.title && (
            <h4 className="text-xs uppercase tracking-wider text-theme-muted font-semibold mb-2 px-3">
              {section.title}
            </h4>
          )}
          <nav className="space-y-1">
            {section.links.map((link) => {
              const linkContent = (
                <>
                  <div className="flex items-center gap-2">
                    <SidebarIcon name={link.iconName} className="opacity-70" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && <Badge variant={link.badge} />}
                </>
              );
              const disabledClass = 'opacity-60 cursor-not-allowed';
              if (link.disabled) {
                return (
                  <span
                    key={link.id}
                    className={`flex items-center justify-between px-3 py-2.5 text-base font-medium text-theme-muted rounded-lg ${disabledClass}`}
                  >
                    {linkContent}
                  </span>
                );
              }
              if (link.external) {
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary rounded-lg transition-colors"
                  >
                    {linkContent}
                  </a>
                );
              }
              return (
                <Link
                  key={link.id}
                  to={`/${link.id}`}
                  className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary rounded-lg transition-colors w-full text-left"
                >
                  {linkContent}
                </Link>
              );
            })}
          </nav>
        </div>
      ))}

      </div>

      {activePackage && (
        <div
          className="p-4 border-t border-theme-border"
          style={{ borderTopColor: `${primaryColor}40` }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">{activePackage.icon}</span>
            <div>
              <div className="text-base font-semibold" style={{ color: primaryColor }}>
                {activePackage.name}
              </div>
              <div className="text-sm text-theme-muted">{activePackage.version}</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
