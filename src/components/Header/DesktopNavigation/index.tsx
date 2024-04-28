import { Link } from 'react-router-dom';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function DesktopNavigation () {
  return (
    <ul className={styles.DesktopNavigation}>
      <li className={styles.navItem}>
        <Link className={styles.navLink} to={resolvePath("/")}>Home</Link>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href="#">About</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href="#">Contact</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href="#">Blog</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href="#">Careers</a>
      </li>
    </ul>
  );
}