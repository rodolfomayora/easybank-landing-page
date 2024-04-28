import { Logo } from '#icons/svg';
import { Link } from 'react-router-dom';
import { LinkInvitation } from '#components//LinkInvitation';
import { Container } from '#components/Container';
import { SocialLinks } from './SocialLinks';
import { FooterNavigation } from './FooterNavigation';
import { resolvePath } from '#utils/resolvePath';
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