import React, { FC } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: FC = ({ children }) => (
  <>
    <Header />
      {children}
    <Footer />
  </>
)

export default Layout;