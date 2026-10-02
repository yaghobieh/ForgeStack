import { createContext, FC, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export type ShellPanel = 'libraries' | 'tools' | 'support' | null;

interface ShellUIValue {
  panel: ShellPanel;
  open: (panel: ShellPanel) => void;
  close: () => void;
}

const ShellUIContext = createContext<ShellUIValue>({
  panel: null,
  open: () => undefined,
  close: () => undefined,
});

export const ShellUIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [panel, setPanel] = useState<ShellPanel>(null);
  const open = useCallback((next: ShellPanel) => setPanel(next), []);
  const close = useCallback(() => setPanel(null), []);
  const value = useMemo(() => ({ panel, open, close }), [panel, open, close]);
  return <ShellUIContext.Provider value={value}>{children}</ShellUIContext.Provider>;
};

export function useShellUI(): ShellUIValue {
  return useContext(ShellUIContext);
}
