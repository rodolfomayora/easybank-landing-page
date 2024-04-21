import styles from './styles.module.scss';

export function MainNavigation () {
  return (
    <nav className={styles.MainNavigation}>
      <a className={styles.navItem} href="#">Home</a>
      <a className={styles.navItem} href="#">About</a>
      <a className={styles.navItem} href="#">Contact</a>
      <a className={styles.navItem} href="#">Blog</a>
      <a className={styles.navItem} href="#">Careers</a>
    </nav>
  );
}