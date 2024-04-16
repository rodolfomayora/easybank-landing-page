import { useEffect } from 'react';
import './assets/styles/style.global.scss';
import { Layout, AtributionBlock } from './components';
import {
  MainSection,
  FeatureSection,
  ActicleSection
} from './landingSections';

const App = () => {

  useEffect(() => {
    const loader = document.getElementById('loader');
    loader?.classList.add("offLoader");
    setTimeout(() => loader?.remove(), 1000);
  }, [])

  return (
    <>
      <Layout>
        <MainSection />
        <FeatureSection />
        <ActicleSection />
      </Layout>
      <AtributionBlock />
    </>
  );
}

export default App;
