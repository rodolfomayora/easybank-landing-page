import { useState } from 'react';
import { ButtonInvitation } from '#components//ButtonInvitation';
import { Container } from '#components/Container';
import { MainNavigation } from '#components/MainNavigation';
import { Modal } from '#components/Modal';

import { Logo, HamburgerIcon, CloseIcon } from '#icons/svg';
import styles from './styles.module.scss';

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const setToggleStyle = (condition: boolean): string => {
    return condition
      ? `${styles.buttonMenu} ${styles.active}`
      : styles.buttonMenu;
  }

  return (
    <>
      <header className={styles.Header}>
        <Container>
          <a href="/">
            <Logo />
          </a>
          
          <div className={styles.navigationMenu}>
            <MainNavigation />
          </div>
          <div className={styles.buttonInvitation}>
            <ButtonInvitation />
          </div>
          
          <div className={setToggleStyle(isMenuOpen)}
            onClick={() => setIsMenuOpen(crr => !crr)}
          >
          {
            isMenuOpen
            ? <CloseIcon />
            : <HamburgerIcon />
          }
          </div>
        
        </Container>
      </header>
    {
      isMenuOpen &&
      <Modal>
        <MainNavigation />
      </Modal>
    }
    </>
  );
}