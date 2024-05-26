import { Head } from 'vite-react-ssg';
import { BasicLayout } from "#layouts/BasicLayout";
import { FeatureSection } from './FeatureSection';
import { ArticleSection } from './ArticleSection';
import { MainSection } from './MainSection';

export function HomePage () {
  return (
    <>
      <Head>
        <title>Home | Easybank</title>
      </Head>
      <BasicLayout>
        <MainSection />
        <FeatureSection />
        <ArticleSection />
      </BasicLayout>
    </>
  );
}