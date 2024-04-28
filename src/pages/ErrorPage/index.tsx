import { Header } from "#components/Header";
import styles from './styles.module.scss';

export function ErrorPage() {
  return (
    <>
      <Header />
      <div className={styles.ErrorPage}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </>
  );
}