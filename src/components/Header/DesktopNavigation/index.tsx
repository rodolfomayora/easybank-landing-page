import styles from './styles.module.scss';
import { navigateTo } from '#utils/navigateTo';

export function DesktopNavigation () {
  return (
    <ul className={styles.DesktopNavigation}>
      <li className={styles.navItem}>
        <a className={styles.navLink} href={navigateTo("/")}>Home</a>
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