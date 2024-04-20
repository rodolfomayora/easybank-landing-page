import { ButtonInvitation } from '#components//ButtonInvitation';
import { Container } from '#components/Container';
import { SecondNavigation } from '#components/SecondNavigation';
import { SocialLinks } from '#components/SocialLinks';
import { Logo } from '#icons/svg';
import styles from './styles.module.scss';

export function Footer () {
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.logo}>
          <Logo /> 
        </div>
        <div>
          <SocialLinks />
        </div>
        <div>
          <SecondNavigation />
        </div>
        <div>
          <ButtonInvitation />
        </div>
        <small className={styles.copyright}>
          &copy; Easybank. All Rights Reserved
        </small>
      </Container>
    </footer>
  );
}