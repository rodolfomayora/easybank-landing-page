import { Link } from 'react-router-dom';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function DesktopNavigation () {
  const pathToHome = resolvePath('/');
  return (
    <ul className={styles.DesktopNavigation}>
      <li className={styles.navItem}>
        <Link className={styles.navLink} to={pathToHome}>Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} to={pathToHome}>About</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} to={pathToHome}>Contact</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} to={pathToHome}>Blog</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} to={pathToHome}>Careers</Link>
      </li>
    </ul>
  );
}