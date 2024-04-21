import type { Feature } from '..';
import { FeatureElement } from './Feature';
import styles from './styles.module.scss';

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
    <ul className={styles.FeatureGrid}>
      {featureElements}
    </ul>
  );
}