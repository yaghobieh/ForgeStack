import { FC } from 'react';
import { Launcher } from '../components/Launcher';
import { ClassicHome } from '../components/ClassicHome';
import { useViewMode, useHashScroll, usePageMeta } from '../hooks';
import { VIEW_MODE_CLASSIC } from '@constants/viewMode.const';
import { HOME_PATH } from '@constants/menu.const';

export const Home: FC = () => {
  const viewMode = useViewMode();
  useHashScroll();
  usePageMeta({ path: HOME_PATH });

  if (viewMode === VIEW_MODE_CLASSIC) {
    return <ClassicHome />;
  }

  return <Launcher />;
};
