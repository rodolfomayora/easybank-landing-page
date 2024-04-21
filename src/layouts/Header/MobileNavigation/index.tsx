import styles from './styles.module.scss';

export function MobileNavigation () {
  return (
    <ul className={styles.MobileNavigation}>
      <li><a className={styles.navLink} href="#">Home</a></li>
      <li><a className={styles.navLink} href="#">About</a></li>
      <li><a className={styles.navLink} href="#">Contact</a></li>
      <li><a className={styles.navLink} href="#">Blog</a></li>
      <li><a className={styles.navLink} href="#">Careers</a></li>
    </ul>
  );
}