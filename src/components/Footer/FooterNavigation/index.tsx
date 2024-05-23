import { Link } from 'react-router-dom';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function FooterNavigation () {
  return (
    <ul className={styles.FooterNavigation}>
      <li><Link className={styles.navLink} to={resolvePath("/")}>About Us</Link></li>
      <li><Link className={styles.navLink} to={resolvePath("/")}>Contact</Link></li>
      <li><Link className={styles.navLink} to={resolvePath("/")}>Blog</Link></li>
      <li><Link className={styles.navLink} to={resolvePath("/")}>Careers</Link></li>
      <li><Link className={styles.navLink} to={resolvePath("/")}>Support</Link></li>
      <li><Link className={styles.navLink} to={resolvePath("/")}>Privacy Policy</Link></li>
    </ul>
  );
}