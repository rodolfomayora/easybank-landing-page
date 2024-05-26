import { Logo } from '#icons/svg';
import { resolvePath } from '#utils/resolvePath';
import { InvitationLink } from '#components/InvitationLink';
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
            <a className={styles.logo}
              href={resolvePath("/")}
              aria-label="Home Page"
            >
              <Logo /> 
            </a>
            <SocialLinks />
          </div>
          <FooterNavigation />
          <div className={styles.block3}>
            <InvitationLink />
            <small className={styles.copyright}>
              &copy; Easybank. All Rights Reserved
            </small>
          </div>
        </nav>
      </Container>
    </footer>
  );
}