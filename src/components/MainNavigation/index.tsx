import styles from './styles.module.scss';

export function MainNavigation () {
  return (
    <nav className={styles.MainNavigation}>
      <a className={styles.navItem} href="#0">Home</a>
      <a className={styles.navItem} href="#0">About</a>
      <a className={styles.navItem} href="#0">Contact</a>
      <a className={styles.navItem} href="#0">Blog</a>
      <a className={styles.navItem} href="#0">Careers</a>
    </nav>
  );
}