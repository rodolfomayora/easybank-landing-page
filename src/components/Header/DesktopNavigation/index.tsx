import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function DesktopNavigation () {
  const pathToHome = resolvePath('/');
  return (
    <ul className={styles.DesktopNavigation}>
      <li className={styles.navItem}>
        <a className={styles.navLink} href={pathToHome}>Home</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href={pathToHome}>About</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href={pathToHome}>Contact</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href={pathToHome}>Blog</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} href={pathToHome}>Careers</a>
      </li>
    </ul>
  );
}