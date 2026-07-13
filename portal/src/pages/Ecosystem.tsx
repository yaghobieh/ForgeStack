import { FC } from 'react';
import { EcosystemStack } from '../components/EcosystemStack';
import { PackagesTable } from '../components/PackagesTable';
import { GettingStarted } from '../components/GettingStarted';
import { WhatWeCanDo } from '../components/WhatWeCanDo';
import { Playground } from '../components/Playground';
import { Footer } from '../components/Footer';
import { useHashScroll, usePageMeta } from '../hooks';
import { ECOSYSTEM_PATH } from '@constants/menu.const';

const ECOSYSTEM_TITLE = 'Ecosystem & Getting Started';
const ECOSYSTEM_DESCRIPTION =
  'Explore every ForgeStack library — UI, data grid, forms, state, routing, data fetching, real-time, auth, and AI — with live versions and a getting-started guide.';

/** Ecosystem overview — content moved off the launcher homepage. */
export const Ecosystem: FC = () => {
  useHashScroll();
  usePageMeta({
    title: ECOSYSTEM_TITLE,
    description: ECOSYSTEM_DESCRIPTION,
    path: ECOSYSTEM_PATH,
  });

  return (
    <div className="fade-in">
      <EcosystemStack />
      <PackagesTable />
      <GettingStarted />
      <WhatWeCanDo />
      <Playground />
      <Footer />
    </div>
  );
};
