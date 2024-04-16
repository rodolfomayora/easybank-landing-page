import type { ReactNode } from 'react';
import style from './style.module.scss';

type Props = {
  children: ReactNode,
}

const GridLayout = ({ children }: Props) => (
  <div className={style.GridLayout}>
    {children}
  </div>
)

export default GridLayout;