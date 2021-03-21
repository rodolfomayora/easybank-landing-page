import React, { FC, useState } from 'react';
import Container from '../Container';
import Modal from '../Modal';
import { Logo, HamburgerIcon, CloseIcon } from '../../assets/img';
import style from './style.module.scss';

const Header: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const setToggleStyle = (condition: boolean): string => {
    return condition
      ? `${style.button} ${style.active}`
      : style.button;
  }

  return (
    <header className={style.Header}>
      <Container>
        <Logo />
        <div className={setToggleStyle(isMenuOpen)}
          onClick={() => setIsMenuOpen(crr => !crr)}
        >
        {
          isMenuOpen
          ? <CloseIcon />
          : <HamburgerIcon />
        }
        </div>
      {
        isMenuOpen &&
        <Modal>
          CONTENIDO
        </Modal>
      }
      </Container>
    </header>
  )
}

export default Header;