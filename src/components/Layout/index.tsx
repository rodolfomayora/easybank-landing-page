import type { ReactNode } from 'react';
import { Header } from '#components/Header';
import { Footer } from '#components/Footer';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
}

export function Layout ({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.MainContent}>
        {children}
      </main>
      <Footer />
    </>
  );
}