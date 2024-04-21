import type { Feature } from '../types';
import styles from './styles.module.scss';

type Props = Feature;

export function FeatureElement ({ title, description, icon: Icon }: Props) {
  return (
    <li className={styles.Feature}>
      <Icon />
      <h3 className={styles.featureTittle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </li>
  );
}