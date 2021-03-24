import React, { FC } from 'react';
import style from './style.module.scss';

const Container: FC = ({ children }) => (
  <div className={style.Container}>
    {children}
  </div>
)

export default Container;