import { Layout } from '#components/Layout';
import { ArticleSection } from './sections/ArticleSection';
import { FeatureSection } from './sections/FeatureSection';
import { MainSection } from './sections/MainSection';

export function Home () {
  return (
    <>
      <Layout>
        <MainSection />
        <FeatureSection />
        <ArticleSection />
      </Layout>
    </>
  );
}