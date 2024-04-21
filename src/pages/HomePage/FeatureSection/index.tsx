import { Container } from '#components/Container';
import {
  OnlineIcon,
  BudgetingIncon,
  OnboardingIcon,
  ApiIcon
} from '#icons/svg';
import { FeatureGrid } from './FeatureGrid';
import styles from './styles.module.scss';

export type Feature = {
  title: string,
  description: string,
  icon: any
}

const features: Feature[] = [
  {
    title: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
    icon: OnlineIcon,
  },
  {
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
    icon: BudgetingIncon,
  },
  {
    title: "Fast Onboarding",
    description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away",
    icon: OnboardingIcon,
  },
  {
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: ApiIcon,
  }
];

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