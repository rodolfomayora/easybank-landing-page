import styles from './styles.module.scss';
import { navigateTo } from '#utils/navigateTo';

export function FooterNavigation () {
  return (
    <ul className={styles.FooterNavigation}>
      <li><a className={styles.navLink} href={navigateTo("/")}>About Us</a></li>
      <li><a className={styles.navLink} href="#">Contact</a></li>
      <li><a className={styles.navLink} href="#">Blog</a></li>
      <li><a className={styles.navLink} href="#">Careers</a></li>
      <li><a className={styles.navLink} href="#">Support</a></li>
      <li><a className={styles.navLink} href="#">Privacy Policy</a></li>
    </ul>
  );
}