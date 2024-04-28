import { Link } from 'react-router-dom';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function FooterNavigation () {
  return (
    <ul className={styles.FooterNavigation}>
      <li><Link className={styles.navLink} to={resolvePath("/")}>About Us</Link></li>
      <li><a className={styles.navLink} href="#">Contact</a></li>
      <li><a className={styles.navLink} href="#">Blog</a></li>
      <li><a className={styles.navLink} href="#">Careers</a></li>
      <li><a className={styles.navLink} href="#">Support</a></li>
      <li><a className={styles.navLink} href="#">Privacy Policy</a></li>
    </ul>
  );
}