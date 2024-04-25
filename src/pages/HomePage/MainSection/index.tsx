import { Container } from '#components/Container';
import { LinkInvitation } from '#components/LinkInvitation';
import { IntroDesktopBackground } from '#icons/svg';
import styles from './styles.module.scss';

import pngSource from '#assets/img/image-mockups.png';
import webpSource from '#assets/img/image-mockups.webp';

export function MainSection () {
  return (
    <section className={styles.MainSection}>
      <div className={styles.imageBlock}>
        <picture>
          <source type="image/webp" srcSet={webpSource} />
          <img className={styles.mockupsMobile}
            src={pngSource}
            alt="App Mokups"
            width="345"
            height="423"
            loading="eager"
            decoding="sync"
          />
        </picture>
      </div>
      <Container>
        <div className={styles.introInformation}>
          <h1 className={styles.mainTitle}>Next generation digital banking</h1>
          <p className={styles.information}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more</p>
          <LinkInvitation />
          <IntroDesktopBackground className={styles.imageBlockBackground} />
          <picture>
            <source type="image/webp" srcSet={webpSource} />
            <img className={styles.mockupsDesktop}
              src={pngSource}
              alt="App Mokups"
              width="767"
              height="939"
              loading="eager"
              decoding="sync"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}
