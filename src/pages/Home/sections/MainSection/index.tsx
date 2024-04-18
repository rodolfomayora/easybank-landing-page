import { Container } from '#components/Container';
import { ButtonInvitation } from '#components/ButtonInvitation';
import styles from './styles.module.scss';

export function MainSection () {
  return (
    <section className={styles.MainSection}>
      <div className={styles.imageBase}>
        <div className={styles.imageLayer}>
          <div className={styles.imageBackground}></div>
          <img className={styles.mockups}
            src="/img/static/image-mockups.webp"
            alt="App Mockup"
          />
        </div>
      </div>
      
      <Container>
        <div className={styles.introInformation}>
          <h1 className={styles.mainTitle}>Next generation digital banking</h1>
          <p className={styles.information}>Take your financial life online. Your Easybank account will be a one-top-shop for spending, saving, budgeting, investing, and much more</p>
          <ButtonInvitation />
        </div>
      </Container>
  
      <img className={styles.mockupsDesktop}
        src="/img/static/image-mockups.webp"
        alt="App Mockup"
      />
    </section>
  );
}
