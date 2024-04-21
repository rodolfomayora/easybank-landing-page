import { BasicLayout } from "#layouts/BasicLayout";
import { FeatureSection } from './FeatureSection';
import { ArticleSection } from './ArticleSection';
import { MainSection } from './MainSection';

export function HomePage () {
  return (
    <BasicLayout>
      <MainSection />
      <FeatureSection />
      <ArticleSection />
    </BasicLayout>
  );
}