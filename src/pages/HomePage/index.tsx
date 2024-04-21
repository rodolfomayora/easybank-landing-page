import { BasicLayout } from "#layouts/BasicLayout";
// import { ArticleSection } from './ArticleSection';
// import { FeatureSection } from './FeatureSection';
import { MainSection } from './MainSection';

export function HomePage () {
  return (
    <BasicLayout>
      <MainSection />
      {/* <FeatureSection /> */}
      {/* <ArticleSection /> */}
    </BasicLayout>
  );
}