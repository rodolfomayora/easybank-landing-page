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
      <a href="#"
        target="_blank"
        rel="external noopener noreferrer"
        aria-label="Facebook"
      >
        <FacebookIcon />
      </a>
      <a href="#"
        target="_blank"
        rel="external noopener noreferrer"
        aria-label="Youtuve"
      >
        <YoutubeIcon />
      </a>
      <a href="#"
        target="_blank"
        rel="external noopener noreferrer"
        aria-label="Twitter"
      >
        <TwitterIcon />
      </a>
      <a href="#"
        target="_blank"
        rel="external noopener noreferrer"
        aria-label="Pinterest"
      >
        <PinteresIcon />
      </a>
      <a href="#"
        target="_blank"
        rel="external noopener noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}