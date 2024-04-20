import styles from './styles.module.scss';

export function DesktopNavigation () {
  return (
    <ul className={styles.DesktopNavigation}>
      <li className={styles.navItem}>
        <a className={styles.navLink} href="#">Home</a>
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