import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
}

export function Modal ({ children }: Props) {
  return createPortal(
    <div className={styles.Modal}>{children}</div>,
    document.body
  )
}