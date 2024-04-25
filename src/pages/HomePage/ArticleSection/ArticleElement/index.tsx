import type { Article } from '../types';
import { resolvePublicSources } from '#utils/resolvePublicSources';
import styles from './styles.module.scss';

type Props = Article;

export function ArticleElement ({ author, title, paragraph, image }: Props) {
  const content = `${paragraph} Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iste voluptates. Quod sapiente amet pariatur delectus sint, quis saepe dolorem odit, odio laudantium rem natus temporibus dolores dolore repellendus illo!`;
  const { jpgSource, webpSource } = resolvePublicSources(image);
  return (
    <article className={styles.ArticleElement}>
      <a className={styles.articleWrapper} href="#">
        <picture>
          <source type="image/webp" srcSet={webpSource} />
          <img className={styles.image}
            src={jpgSource}
            alt={title}
            width="327"
            height="201"
            loading="lazy"
            decoding="auto"
          />
        </picture>
        <div className={styles.overview}>
          <span className={styles.author}>By {author}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.paragraph}>{content}</p>
        </div>
      </a>
    </article>
  );
}