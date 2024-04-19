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
      <a href="#" aria-label="Facebook"><FacebookIcon /></a>
      <a href="#" aria-label="Youtuve"><YoutubeIcon /></a>
      <a href="#" aria-label="Twitter"><TwitterIcon /></a>
      <a href="#" aria-label="Pinterest"><PinteresIcon /></a>
      <a href="#" aria-label="Instagram"><InstagramIcon /></a>
    </div>
  );
}