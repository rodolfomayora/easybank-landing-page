import { Logo } from '#icons/svg';
import { LinkInvitation } from '#components//LinkInvitation';
import { Container } from '#components/Container';
import { SocialLinks } from './SocialLinks';
import { FooterNavigation } from './FooterNavigation';
import { navigateTo } from '#utils/navigateTo';
import styles from './styles.module.scss';

export function Footer () {
  return (
    <footer className={styles.Footer}>
      <Container>
        <nav className={styles.navigation}>
          <div className={styles.block1}>
            <a className={styles.logo}
            href={navigateTo("/")}
            aria-label="Home Page"
          >
              <Logo /> 
            </a>
            <SocialLinks />
          </div>
          <FooterNavigation />
          <div className={styles.block3}>
            <LinkInvitation />
            <small className={styles.copyright}>
              &copy; Easybank. All Rights Reserved
            </small>
          </div>
        </nav>
      </Container>
    </footer>
  );
}