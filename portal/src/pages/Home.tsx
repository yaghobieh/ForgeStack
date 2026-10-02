import { FC } from 'react';
import { ForgeHome } from './ForgeHome';
import { usePageMeta } from '../hooks';
import { HOME_PATH } from '@constants/menu.const';

export const Home: FC = () => {
  usePageMeta({ path: HOME_PATH });
  return <ForgeHome />;
};
