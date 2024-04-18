import styles from './styles.module.scss';

type Props = {
  title: string,
  description: string,
  icon: any
}

export function FeatureBlock ({ title, description, icon: Icon }: Props) {
  return (
    <section className={styles.FeatureBlock}>
      <Icon />
      <h3 className={styles.featureTittle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </section>
  );
}