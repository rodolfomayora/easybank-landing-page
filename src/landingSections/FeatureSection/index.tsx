import React, { FC } from 'react';
import { Container } from '../../components';
import {
  OnlineIcon,
  BudgetingIncon,
  OnboardingIcon,
  ApiIcon
} from '../../assets/img';
import style from './style.module.scss';

const FeatureSection: FC = () => (
  <section className={style.FeatureSection}>
    <Container>
      <h2>Why shoose Easybank</h2>
      <p>We leverage Open Banking to turn your bank account into your financial hub. <br/> Control your finances like never before</p>
      <div>
        <section>
          <OnlineIcon />
          <h3>Online Banking</h3>
          <p>Our modern web and mobile appications allow yout to keep track of your finances wherever you are in the world.</p>
        </section>
        <section>
          <BudgetingIncon />
          <h3>Simple Budgeting</h3>
          <p>See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits.</p>
        </section>
        <section>
          <OnboardingIcon />
          <h3>Fast Onboarding</h3>
          <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away</p>
        </section>
        <section>
          <ApiIcon />
          <h3>Open API</h3>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </section>
      </div>
    </Container>
  </section>
)

export default FeatureSection;