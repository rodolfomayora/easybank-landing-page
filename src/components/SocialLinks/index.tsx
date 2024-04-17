import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  PinteresIcon,
  InstagramIcon,
} from '#icons/svg';
import style from './style.module.scss';

const SocialLinks = () => (
  <div className={style.SocialLinks}>
    <a href="#0"><FacebookIcon /></a>
    <a href="#0"><YoutubeIcon /></a>
    <a href="#0"><TwitterIcon /></a>
    <a href="#0"><PinteresIcon /></a>
    <a href="#0"><InstagramIcon /></a>
  </div>
)

export default SocialLinks;