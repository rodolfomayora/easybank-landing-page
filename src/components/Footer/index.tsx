import { Logo } from '#icons/svg';
import { Link } from 'react-router-dom';
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
            <Link className={styles.logo}
              to={resolvePath("/")}
              aria-label="Home Page"
            >
              <Logo /> 
            </Link>
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