import React, { FC } from 'react';
import { Container, FeatureBlock, GridLayout } from '../../components';
import {
  OnlineIcon,
  BudgetingIncon,
  OnboardingIcon,
  ApiIcon
} from '../../assets/img';
import style from './style.module.scss';

const FeatureSection: FC = () => {
  
  const features: Array<any> = [
    {
      id: 1,
      title: "Online Banking",
      description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
      icon: OnlineIcon,
    },
    {
      id: 2,
      title: "Simple Budgeting",
      description: "See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits.",
      icon: BudgetingIncon,
    },
    {
      id: 3,
      title: "Fast Onboarding",
      description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away",
      icon: OnboardingIcon,
    },
    {
      id: 4,
      title: "Open API",
      description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      icon: ApiIcon,
    }
  ];

  return (
    <section className={style.FeatureSection}>
      <Container>
        <h2 className={style.sectionTitle}>Why choose Easybank?</h2>
        <p className={style.sectionDescription}>
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before
        </p>
        <div>
          <GridLayout>
          {
            features.map(({ id, title, description, icon }: any) => (
              <FeatureBlock
                key={id.toString()}
                title={title}
                description={description}
                icon={icon}
              />
            ))
          }
          </GridLayout>
        </div>
      </Container>
    </section>
  )
}

export default FeatureSection;