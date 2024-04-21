import { Container } from '#components/Container';
import { FeatureGrid } from './FeatureGrid';
import { features } from './features';
import styles from './styles.module.scss';

export function FeatureSection () {
  return (
    <section className={styles.FeatureSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Why choose Easybank?</h2>
        <p className={styles.sectionDescription}>
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before
        </p>
        <FeatureGrid features={features} />
      </Container>
    </section>
  );
}