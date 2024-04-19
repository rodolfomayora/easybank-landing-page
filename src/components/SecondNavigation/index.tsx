import styles from './styles.module.scss';

export function SecondNavigation () {
  return (
    <nav className={styles.SecondNavigation}>
      <a className={styles.navItem} href="#">About Us</a>
      <a className={styles.navItem} href="#">Contact</a>
      <a className={styles.navItem} href="#">Blog</a>
      <a className={styles.navItem} href="#">Careers</a>
      <a className={styles.navItem} href="#">Support</a>
      <a className={styles.navItem} href="#">Privacy Policy</a>
    </nav>
  );
}