import { Link } from 'react-router-dom';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function MobileNavigation () {
  return (
    <ul className={styles.MobileNavigation}>
      <li><Link className={styles.navLink} to={resolvePath("/")}>Home</Link></li>
      <li><a className={styles.navLink} href="#">About</a></li>
      <li><a className={styles.navLink} href="#">Contact</a></li>
      <li><a className={styles.navLink} href="#">Blog</a></li>
      <li><a className={styles.navLink} href="#">Careers</a></li>
    </ul>
  );
}