import type { ComponentProps } from 'react';
import { HamburgerIcon, CloseIcon } from '#icons/svg';
import styles from './styles.module.scss';

type Props = ComponentProps<'button'> & {
  isExpanded: boolean,
}

export function ToggleButton ({ isExpanded, ...props }: Props) {
  const buttonIcon = isExpanded ? <CloseIcon /> : <HamburgerIcon />;
  return (
    <button className={styles.ToggleButton}
      type="button"
      aria-expanded={isExpanded}
      {...props}
    >
      {buttonIcon}  
    </button>
  );
}