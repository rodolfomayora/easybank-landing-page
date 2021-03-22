import React, { FC } from 'react';
import Container from '../Container';
import SecondNavigation from '../SecondNavigation';
import ButtonInvitation from '../ButtonInvitation';
import SocialLinks from '../SocialLinks';
import { Logo } from '../../assets/img';
import style from './style.module.scss';

const Footer: FC = () => (
  <footer className={style.Footer}>
    <Container>
      <div className={style.logo}>
        <Logo /> 
      </div>
      <SocialLinks />
      
      <SecondNavigation />

      <ButtonInvitation />
      <small className={style.copyright}>
        &copy; Easybank. All Rights Reserved
      </small>
    </Container>
  </footer>
)

export default Footer;