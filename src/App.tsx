import { useEffect } from 'react';
import { Layout, AtributionBlock } from './components';
import {
  MainSection,
  FeatureSection,
  ArticleSection
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
        <ArticleSection />
      </Layout>
      <AtributionBlock />
    </>
  );
}

export default App;
