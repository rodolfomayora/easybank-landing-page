import React, { FC } from 'react';
import ArticleProps from './type';
import style from './style.module.scss';

import { articleImage1 } from '../../assets/img';

const Acticle: FC<ArticleProps> = ({
  author,
  title,
  overview,
  image
}) => (
  <article className={style.Acticle}>

    <div className={style.imageBase}>
      <div className={style.imageLayer}>
        <div className={style.imageWrapper}>
          <img className={style.image}
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>

    <div className={style.overview}>
      <div className={style.author}>By {author}</div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.paragraph}>
      {
        `${overview} Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iste voluptates. Quod sapiente amet pariatur delectus sint, quis saepe dolorem odit, odio laudantium rem natus temporibus dolores dolore repellendus illo!`
      }
      </p>
    </div>
  </article>
)

export default Acticle;