import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function FooterNavigation () {
  const pathToHome = resolvePath('/');
  return (
    <ul className={styles.FooterNavigation}>
      <li><a className={styles.navLink} href={pathToHome}>About Us</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Contact</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Blog</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Careers</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Support</a></li>
      <li><a className={styles.navLink} href={pathToHome}>Privacy Policy</a></li>
    </ul>
  );
}