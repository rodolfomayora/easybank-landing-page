import { Logo } from '#icons/svg';
import { ButtonInvitation } from '#components//ButtonInvitation';
import { Container } from '#components/Container';
import { SocialLinks } from './SocialLinks';
import { FooterNavigation } from './FooterNavigation';
import styles from './styles.module.scss';

export function Footer () {
  return (
    <footer className={styles.Footer}>
      <Container>
        <nav className={styles.navigation}>
          <div className={styles.block1}>
            <a className={styles.logo} href="/" aria-label="Home Page">
              <Logo /> 
            </a>
            <SocialLinks />
          </div>
          <FooterNavigation />
          <div className={styles.block3}>
            <ButtonInvitation />
            <small className={styles.copyright}>
              &copy; Easybank. All Rights Reserved
            </small>
          </div>
        </nav>
      </Container>
    </footer>
  );
}