import { useState } from 'react';
import { Container } from '#components/Container';
import { LinkInvitation } from '#components//LinkInvitation';
import { MobileNavigation } from './MobileNavigation';
import { DesktopNavigation } from './DesktopNavigation';
import { Logo, HamburgerIcon, CloseIcon } from '#icons/svg';
import styles from './styles.module.scss';

export function Header () {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(isExpanded => !isExpanded); 
  const buttonIcon = isExpanded ? <CloseIcon /> : <HamburgerIcon />;

  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.navigation}>
          <a className={styles.logo}
            href="#"
            aria-label="Home Page"
          >
            <Logo />
          </a>

          <div className={styles.desktopMenuWrapper}>
            <DesktopNavigation />
          </div>
          
          <button className={styles.mobileMenuButton}
            type="button"
            onClick={handleClick}
          >
            {buttonIcon}  
          </button>

          <div className={styles.buttonWrapper}>
            <LinkInvitation />
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