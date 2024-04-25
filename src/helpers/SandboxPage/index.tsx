import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import styles from './styles.module.scss';

export function SandBox ({ children }: { children: ReactNode }) {
  return createPortal((
      <div className={styles.SandBox}>
        <div className={styles.component}>{children}</div>
      </div>
    ),
    document.body
  );
}