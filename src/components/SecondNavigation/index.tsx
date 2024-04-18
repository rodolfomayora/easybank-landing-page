import styles from './styles.module.scss';

export function SecondNavigation () {
  return (
    <nav className={styles.SecondNavigation}>
      <a className={styles.navItem} href="#0">About Us</a>
      <a className={styles.navItem} href="#0">Contact</a>
      <a className={styles.navItem} href="#0">Blog</a>
      <a className={styles.navItem} href="#0">Careers</a>
      <a className={styles.navItem} href="#0">Support</a>
      <a className={styles.navItem} href="#0">Privacy Policy</a>
    </nav>
  );
}