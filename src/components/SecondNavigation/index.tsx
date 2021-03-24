import React, { FC } from 'react';
import style from './style.module.scss';

const SecondNavigation: FC = () => (
  <nav className={style.SecondNavigation}>
    <a className={style.navItem} href="#0">About Us</a>
    <a className={style.navItem} href="#0">Contact</a>
    <a className={style.navItem} href="#0">Blog</a>
    <a className={style.navItem} href="#0">Careers</a>
    <a className={style.navItem} href="#0">Support</a>
    <a className={style.navItem} href="#0">Privacy Policy</a>
  </nav>
)

export default SecondNavigation;