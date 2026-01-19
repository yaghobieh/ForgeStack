import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { PACKAGES, ForgePackage } from '@constants';

interface ThemeContextType {
  activePackage: ForgePackage | null;
  setActivePackageId: (id: string | null) => void;
  primaryColor: string;
  accentColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const DEFAULT_COLOR = '#1890ff'; // ForgeStack blue

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activePackageId, setActivePackageIdState] = useState<string | null>(null);

  const activePackage = useMemo(() => {
    if (!activePackageId) return null;
    return PACKAGES.find((pkg) => pkg.id === activePackageId) || null;
  }, [activePackageId]);

  const primaryColor = activePackage?.color || DEFAULT_COLOR;
  const accentColor = activePackage?.color || DEFAULT_COLOR;

  const setActivePackageId = (id: string | null) => {
    setActivePackageIdState(id);
    // Update CSS variables for theming
    document.documentElement.style.setProperty('--active-package-color', id ? PACKAGES.find(p => p.id === id)?.color || DEFAULT_COLOR : DEFAULT_COLOR);
  };

  return (
    <ThemeContext.Provider
      value={{
        activePackage,
        setActivePackageId,
        primaryColor,
        accentColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const usePackageTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('usePackageTheme must be used within a ThemeProvider');
  }
  return context;
};

