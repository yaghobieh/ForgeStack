import { FC } from 'react';
import { Hero } from '../components/Hero';
import { WhatWeCanDo } from '../components/WhatWeCanDo';
import { PackagesTable } from '../components/PackagesTable';
import { Playground } from '../components/Playground';
import { Footer } from '../components/Footer';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <WhatWeCanDo />
      <PackagesTable />
      <Playground />
      <Footer />
    </>
  );
};

