import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode
}

export function Container ({ children }: Props) {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  );
}