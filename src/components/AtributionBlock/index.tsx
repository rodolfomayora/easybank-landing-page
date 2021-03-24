import React, { FC } from 'react';
import style from './style.module.scss';

const AtributionBlock: FC = () => {
  return (
    <div className={style.Attribution}>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="external noopener noreferrer"
      >
        Frontend Mentor
      </a>.
      <br />
      Coded by
      <a
        href="https://rodolfomayora.github.io/mi-portafolio/"
        target="_blank"
        rel="external noopener noreferrer"
      >
        Rodolfo Mayora Pereda
      </a>.
    </div>
  )
}

export default AtributionBlock;