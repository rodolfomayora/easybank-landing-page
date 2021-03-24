import React from 'react';
import './assets/styles/style.global.scss';
import { Layout, AtributionBlock } from './components';
import {
  MainSection,
  FeatureSection,
  ActicleSection
} from './landingSections';

const App = () => (
  <>
    <Layout>
      <MainSection />
      <FeatureSection />
      <ActicleSection />
    </Layout>
    <AtributionBlock />
  </>
);

export default App;
