import {
  OnlineIcon,
  BudgetingIcon,
  OnboardingIcon,
  ApiIcon
} from '#icons/svg';
import { Feature } from './types';

export const features: Feature[] = [
  {
    title: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
    icon: OnlineIcon,
  },
  {
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
    icon: BudgetingIcon,
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