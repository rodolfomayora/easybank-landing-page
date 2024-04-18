import styles from './styles.module.scss';

export function AtributionBlock () {
  return (
    <div className={styles.Attribution}>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="external noopener noreferrer"
      >
        Frontend Mentor
      </a>.
      <br />
      Coded by
      <a
        href="https://rodolfo-mayora-pereda.vercel.app"
        target="_blank"
        rel="external noopener noreferrer"
      >
        Rodolfo Mayora Pereda
      </a>.
    </div>
  )
}