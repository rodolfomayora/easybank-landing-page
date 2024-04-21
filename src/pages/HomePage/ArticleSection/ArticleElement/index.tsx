import type { Article } from '../types';
import styles from './styles.module.scss';

type Props = Article

export function ArticleElement ({ author, title, paragraph, image }: Props) {
  const content = `${paragraph} Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iste voluptates. Quod sapiente amet pariatur delectus sint, quis saepe dolorem odit, odio laudantium rem natus temporibus dolores dolore repellendus illo!`;

  return (
    <article className={styles.ArticleElement}>
      <a className={styles.articleWrapper} href="#">
        <img className={styles.image}
          src={image}
          alt={title}
          width="327"
          height="201"
        />
        <div className={styles.overview}>
          <a className={styles.author} href="#">By {author}</a>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.paragraph}>{content}</p>
        </div>
      </a>
    </article>
  );
}