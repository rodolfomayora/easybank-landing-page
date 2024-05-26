import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function MobileNavigation () {
  const pathToHome = resolvePath('/');
  return (
    <ul className={styles.MobileNavigation}>
      <li><a className={styles.navLink} href={pathToHome}>Home</a></li>
      <li><a className={styles.navLink} href={pathToHome}>About</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Contact</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Blog</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Careers</a></li>
    </ul>
  );
}