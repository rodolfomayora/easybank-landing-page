import { FC, useState } from 'react';
import Container from '../Container';
// import Modal from '../Modal';
import MainNavigation from '../MainNavigation';
import ButtonInvitation from '../ButtonInvitation';
import { Logo, HamburgerIcon, CloseIcon } from '#icons/svg';
import style from './style.module.scss';

const Header: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const setToggleStyle = (condition: boolean): string => {
    return condition
      ? `${style.buttonMenu} ${style.active}`
      : style.buttonMenu;
  }

  return (
    <>
      <header className={style.Header}>
        <Container>
          <a href="/">
            <Logo />
          </a>
          
          <div className={style.navigationMenu}>
            <MainNavigation />
          </div>
          <div className={style.buttonInvitation}>
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
    {/* {
      isMenuOpen &&
      <Modal>
        <MainNavigation />
      </Modal>
    } */}
    </>
  )
}

export default Header;