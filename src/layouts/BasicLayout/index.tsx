import type { ReactNode } from 'react';
import { AtributionBlock } from '#components/AtributionBlock'
import { Header } from './Header';
import { Footer } from './Footer';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
}

export function BasicLayout ({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.MainContent}>
        {children}
      </main>
      <Footer />
      <AtributionBlock />
    </>
  );
}