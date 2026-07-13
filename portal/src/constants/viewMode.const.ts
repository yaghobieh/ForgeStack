// Homepage view toggle — TV launcher vs. classic portal layout

export const VIEW_MODE_STORAGE_KEY = 'fs-view-mode';

export const VIEW_MODE_LAUNCHER = 'launcher';
export const VIEW_MODE_CLASSIC = 'classic';

export type ViewMode = typeof VIEW_MODE_LAUNCHER | typeof VIEW_MODE_CLASSIC;

export const VIEW_MODE_TOGGLE_LABEL = 'Classic view';
