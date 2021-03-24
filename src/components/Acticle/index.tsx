import React, { FC } from 'react';
import ArticleProps from './type';
import style from './style.module.scss';

const Acticle: FC<ArticleProps> = ({
  author,
  title,
  paragraph,
  image
}) => (
  <article className={style.Acticle}>
    <a className={style.articleWrapper} href="#0">
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
        <div className={style.titleWrapper}>
          <h3 className={style.title}>{title}</h3>
        </div>
        <p className={style.paragraph}>
        {
          `${paragraph} Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iste voluptates. Quod sapiente amet pariatur delectus sint, quis saepe dolorem odit, odio laudantium rem natus temporibus dolores dolore repellendus illo!`
        }
        </p>
      </div>
    </a>
  </article>
)

export default Acticle;