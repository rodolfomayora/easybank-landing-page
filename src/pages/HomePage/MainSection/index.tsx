import { Container } from '#components/Container';
import { ButtonInvitation } from '#components/ButtonInvitation';
import { resolvePublicPath } from '#utils/resolvePublicPath';
import { IntroDesktop } from '#assets/icons/svg';
import styles from './styles.module.scss';

export function MainSection () {
  const mockupSource = resolvePublicPath('/img/static/image-mockups.webp');
  return (
    <section className={styles.MainSection}>
      <div className={styles.imageBlock}>
        <img className={styles.mockupsMobile}
          src={mockupSource}
          alt="App Mokups"
        />
      </div>
      <Container>
        <div className={styles.introInformation}>
          <h1 className={styles.mainTitle}>Next generation digital banking</h1>
          <p className={styles.information}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more</p>
          <ButtonInvitation />
          <IntroDesktop className={styles.imageBlockBackground} />
          <img className={styles.mockupsDesktop}
            src={mockupSource}
            alt="App Mokups"
          />
        </div>
      </Container>
    </section>
  );
}
