import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
}

export function GridLayout ({ children }: Props) {
  return (
    <div className={styles.GridLayout}>
      {children}
    </div>
  );
}