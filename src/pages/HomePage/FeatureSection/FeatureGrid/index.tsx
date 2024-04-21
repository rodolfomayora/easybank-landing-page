import type { Feature } from '../types';
import { FeatureElement } from '../FeatureElement';
import { GridLayout } from '#layouts/GridLayout';

type Props = {
  features: Feature[],
}

export function FeatureGrid ({ features }: Props) {
  const featureElements = features.map(({ title, description, icon }: Feature) => (
    <FeatureElement key={crypto.randomUUID()}
      title={title}
      description={description}
      icon={icon}
    />
  ));

  return (
    <GridLayout>
      {featureElements}
    </GridLayout>
  );
}