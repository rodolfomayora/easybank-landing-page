import { Container } from '#components/Container';
import { ButtonInvitation } from '#components/ButtonInvitation';
import styles from './styles.module.scss';

export function MainSection () {
  const mockupSource = `${import.meta.env.BASE_URL}/img/static/image-mockups.webp`
  // const mockupSource = new URL('/img/static/image-mockups.webp', import.meta.url).href;
  return (
    <section className={styles.MainSection}>
      <div className={styles.imageBase}>
        <div className={styles.imageLayer}>
          <div className={styles.imageBackground}></div>
          <img className={styles.mockups}
            src={mockupSource}
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
        // src="/img/static/image-mockups.webp"
        // src="/easybank-landing-page/img/static/image-mockups.webp"
        src={mockupSource}
        alt="App Mockup"
      />
    </section>
  );
}
