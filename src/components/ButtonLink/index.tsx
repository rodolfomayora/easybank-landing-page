import type { ComponentProps, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = ComponentProps<'a'> & {
  children: ReactNode,
  href: string,
}

export function ButtonLink ({ children, href, ...props }: Props) {
  return (
    <a className={styles.ButtonLink}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}