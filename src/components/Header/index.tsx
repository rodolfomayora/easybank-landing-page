import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '#components/Container';
import { InvitationLink } from '#components/InvitationLink';
import { MobileNavigation } from './MobileNavigation';
import { DesktopNavigation } from './DesktopNavigation';
import { Logo, HamburgerIcon, CloseIcon } from '#icons/svg';
import { resolvePath } from '#utils/resolvePath';
import styles from './styles.module.scss';

export function Header () {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(isExpanded => !isExpanded); 
  const buttonIcon = isExpanded ? <CloseIcon /> : <HamburgerIcon />;

  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.navigation}>
          <Link className={styles.logo}
            to={resolvePath("/")}
            aria-label="Home Page"
          >
            <Logo />
          </Link>

          <div className={styles.desktopMenuWrapper}>
            <DesktopNavigation />
          </div>
          
          <button className={styles.mobileMenuButton}
            type="button"
            onClick={handleClick}
            aria-expanded={isExpanded}
          >
            {buttonIcon}  
          </button>

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