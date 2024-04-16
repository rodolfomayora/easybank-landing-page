import type { ReactNode } from 'react';
import style from './style.module.scss';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: ReactNode,
}

export function Layout ({ children }: Props) {
  return (
    <>
      <Header />
      <main className={style.MainContent}>
        {children}
      </main>
      <Footer />
    </>
  );
}