import { Layout } from '#components/Layout';
import { AtributionBlock } from '#components/AtributionBlock'

import { ArticleSection } from './landingSections/ArticleSection';
import { FeatureSection } from './landingSections/FeatureSection';
import { MainSection } from './landingSections/MainSection';

export function App () {
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