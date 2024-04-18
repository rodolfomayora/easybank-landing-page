import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  PinteresIcon,
  InstagramIcon,
} from '#icons/svg';
import styles from './styles.module.scss';

export function SocialLinks () {
  return (
    <div className={styles.SocialLinks}>
      <a href="#0"><FacebookIcon /></a>
      <a href="#0"><YoutubeIcon /></a>
      <a href="#0"><TwitterIcon /></a>
      <a href="#0"><PinteresIcon /></a>
      <a href="#0"><InstagramIcon /></a>
    </div>
  );
}