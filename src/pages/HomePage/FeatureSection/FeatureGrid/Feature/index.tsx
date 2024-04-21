import type { Feature } from '../..';
import styles from './styles.module.scss';

export function FeatureElement ({ title, description, icon: Icon }: Feature) {
  return (
    <li className={styles.Feature}>
      <Icon />
      <h3 className={styles.featureTittle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </li>
  );
}