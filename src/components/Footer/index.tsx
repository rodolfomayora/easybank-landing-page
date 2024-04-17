import Container from '../Container';
import SecondNavigation from '../SecondNavigation';
import ButtonInvitation from '../ButtonInvitation';
import SocialLinks from '../SocialLinks';
import { Logo } from '../../assets/img';
import style from './style.module.scss';

const Footer = () => (
  <footer className={style.Footer}>
    <Container>
      <div className={style.logo}>
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
      <small className={style.copyright}>
        &copy; Easybank. All Rights Reserved
      </small>
    </Container>
  </footer>
)

export default Footer;