import { FC } from 'react';
import { Hero } from '../Hero';
import { EcosystemStack } from '../EcosystemStack';
import { PackagesTable } from '../PackagesTable';
import { GettingStarted } from '../GettingStarted';
import { WhatWeCanDo } from '../WhatWeCanDo';
import { LibraryCodeExamples } from '../LibraryCodeExamples';
import { FocusSections } from '../FocusSections';
import { AboutCreator } from '../AboutCreator';
import { Playground } from '../Playground';
import { Footer } from '../Footer';

/** The pre-launcher portal homepage, kept behind the "Classic view" toggle. */
export const ClassicHome: FC = () => (
  <>
    <Hero />
    <EcosystemStack />
    <PackagesTable />
    <GettingStarted />
    <WhatWeCanDo />
    <LibraryCodeExamples />
    <FocusSections />
    <AboutCreator />
    <Playground />
    <Footer />
  </>
);
