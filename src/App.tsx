// import { useEffect } from 'react';
import { Layout } from '#components/Layout';
import { AtributionBlock } from '#components/AtributionBlock'

import { ArticleSection } from './landingSections/ArticleSection';
import { FeatureSection } from './landingSections/FeatureSection';
import { MainSection } from './landingSections/MainSection';

export function App () {

  // useEffect(() => {
  //   const loader = document.getElementById('loader');
  //   loader?.classList.add("offLoader");
  //   setTimeout(() => loader?.remove(), 1000);
  // }, [])

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