import React, { FC } from 'react';
import style from './style.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main className={style.MainContent}>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout;