import styles from './styles.module.scss';
import { navigateTo } from '#utils/navigateTo';

export function MobileNavigation () {
  return (
    <ul className={styles.MobileNavigation}>
      <li><a className={styles.navLink} href={navigateTo("/")}>Home</a></li>
      <li><a className={styles.navLink} href="#">About</a></li>
      <li><a className={styles.navLink} href="#">Contact</a></li>
      <li><a className={styles.navLink} href="#">Blog</a></li>
      <li><a className={styles.navLink} href="#">Careers</a></li>
    </ul>
  );
}