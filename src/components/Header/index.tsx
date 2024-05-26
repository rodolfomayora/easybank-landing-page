import { useState } from 'react';
import { Container } from '#components/Container';
import { InvitationLink } from '#components/InvitationLink';
import { MobileNavigation } from './MobileNavigation';
import { DesktopNavigation } from './DesktopNavigation';
import { ToggleButton } from './ToggleButton';
import { Logo } from '#icons/svg';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function Header () {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(isExpanded => !isExpanded);
  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.navigation}>
          <a className={styles.logo}
            href={resolvePath("/")}
            aria-label="Home Page"
          >
            <Logo />
          </a>

          <div className={styles.desktopMenuWrapper}>
            <DesktopNavigation />
          </div>

          <div className={styles.toggleButtonWrapper}>
            <ToggleButton
              isExpanded={isExpanded}
              onClick={handleClick}
            />
          </div>
          
          <div className={styles.buttonWrapper}>
            <InvitationLink />
          </div>
        </nav>
      </Container>

      <nav className={styles.mobileMenuWrapper}
        aria-expanded={isExpanded}
      >
        <Container>
          <MobileNavigation />
        </Container>
      </nav>
    </header>
  );
}