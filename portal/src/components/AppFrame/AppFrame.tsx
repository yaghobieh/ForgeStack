import { FC, ReactNode, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { MobileNav } from '../MobileNav';
import { HOME_PATH } from '@constants/menu.const';
import { VIEW_MODE_LAUNCHER } from '@constants/viewMode.const';
import { useViewMode } from '@hooks/useViewMode';

interface AppFrameProps {
  children: ReactNode;
}

/**
 * App shell: navbar + docs sidebar + main content.
 * On the launcher homepage the sidebar is hidden so the webOS-style
 * launcher can go full-bleed edge to edge. The classic homepage view
 * keeps the original sidebar layout.
 */
export const AppFrame: FC<AppFrameProps> = ({ children }) => {
  const location = useLocation();
  const viewMode = useViewMode();
  const isLauncher = location.pathname === HOME_PATH && viewMode === VIEW_MODE_LAUNCHER;
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavToggle = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  const handleMobileNavClose = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <div className="min-h-screen text-theme-primary transition-colors duration-200 overflow-x-hidden">
      <Navbar onMobileMenuToggle={handleMobileNavToggle} />
      <MobileNav isOpen={isMobileNavOpen} onClose={handleMobileNavClose} />
      <div className="flex">
        {!isLauncher && <Sidebar className="fixed left-0 top-16 bottom-0 z-40 hidden lg:flex" />}
        <main className={`flex-1 min-w-0 ${isLauncher ? '' : 'lg:ml-56'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};
