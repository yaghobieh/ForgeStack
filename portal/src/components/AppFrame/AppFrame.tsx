import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { SiteHeader } from '../Shell/SiteHeader';
import { SiteFooter } from '../Shell/SiteFooter';
import { CatalogProvider } from '@/catalog/CatalogContext';
import { ShellUIProvider } from '@/catalog/shell';

const PLAIN = ['/', '/libraries', '/community', '/support', '/terms', '/blog'];

interface AppFrameProps {
  children: ReactNode;
}

export const AppFrame: FC<AppFrameProps> = ({ children }) => {
  const { pathname } = useLocation();
  const plain = PLAIN.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  return (
    <CatalogProvider>
      <ShellUIProvider>
        <div className="fs-site">
          <SiteHeader />
          <div className="flex">
            {!plain && <Sidebar className="fixed left-0 top-[73px] bottom-0 z-30 hidden lg:flex" />}
            <main className={`flex-1 min-w-0 ${plain ? '' : 'lg:ml-56'}`}>
              {children}
            </main>
          </div>
          <SiteFooter />
        </div>
      </ShellUIProvider>
    </CatalogProvider>
  );
};
