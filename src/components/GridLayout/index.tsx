import React, { FC } from 'react';
import style from './style.module.scss';

const GridLayout: FC = ({ children }) => (
  <div className={style.GridLayout}>
    {children}
  </div>
)

export default GridLayout;