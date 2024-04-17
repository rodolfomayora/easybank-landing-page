import { FC } from 'react';
import style from './style.module.scss';

const MainNavigation: FC = () => (
  <nav className={style.MainNavigation}>
    <a className={style.navItem} href="#0">Home</a>
    <a className={style.navItem} href="#0">About</a>
    <a className={style.navItem} href="#0">Contact</a>
    <a className={style.navItem} href="#0">Blog</a>
    <a className={style.navItem} href="#0">Careers</a>
  </nav>
)

export default MainNavigation;