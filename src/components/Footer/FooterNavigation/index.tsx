import { Link } from 'react-router-dom';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function FooterNavigation () {
  const pathToHome = resolvePath('/');
  return (
    <ul className={styles.FooterNavigation}>
      <li><Link className={styles.navLink} to={pathToHome}>About Us</Link></li>
      <li><Link className={styles.navLink} to={pathToHome}>Contact</Link></li>
      <li><Link className={styles.navLink} to={pathToHome}>Blog</Link></li>
      <li><Link className={styles.navLink} to={pathToHome}>Careers</Link></li>
      <li><Link className={styles.navLink} to={pathToHome}>Support</Link></li>
      <li><Link className={styles.navLink} to={pathToHome}>Privacy Policy</Link></li>
    </ul>
  );
}