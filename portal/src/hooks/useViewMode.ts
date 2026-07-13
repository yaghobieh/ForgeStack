import { useSyncExternalStore } from 'react';
import {
  VIEW_MODE_STORAGE_KEY,
  VIEW_MODE_CLASSIC,
  VIEW_MODE_LAUNCHER,
} from '@constants/viewMode.const';
import type { ViewMode } from '@constants/viewMode.const';

const listeners = new Set<() => void>();

const readViewMode = (): ViewMode => {
  try {
    return window.localStorage.getItem(VIEW_MODE_STORAGE_KEY) === VIEW_MODE_CLASSIC
      ? VIEW_MODE_CLASSIC
      : VIEW_MODE_LAUNCHER;
  } catch {
    return VIEW_MODE_LAUNCHER;
  }
};

const subscribe = (listener: () => void): (() => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const setViewMode = (mode: ViewMode): void => {
  try {
    window.localStorage.setItem(VIEW_MODE_STORAGE_KEY, mode);
  } catch {
    // storage unavailable — mode stays for this session only
  }
  listeners.forEach((listener) => listener());
};

/** Homepage layout: new TV-launcher screen vs. the classic portal layout. Persisted in localStorage. */
export const useViewMode = (): ViewMode =>
  useSyncExternalStore(subscribe, readViewMode, () => VIEW_MODE_LAUNCHER);
