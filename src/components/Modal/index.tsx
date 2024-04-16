import React, { useState, useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.scss';

type Props = {
  children: ReactNode,
}

const Modal = ({ children }: Props) => {
  const [reference, setReference] = useState<any>(() => {
    return document.getElementById('modal');
  });

  useEffect(() => {
    return () => setReference(null);
  }, [reference])

  return ReactDOM.createPortal(
    <div className={style.Modal}>
      {children}
    </div>,
    reference
  )
}

export default Modal;