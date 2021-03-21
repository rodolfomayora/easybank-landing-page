import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.scss';

const Modal: FC = ({ children }) => {
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