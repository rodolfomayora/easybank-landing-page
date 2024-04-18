import styles from './styles.module.scss';

type Props = {
  author: string,
  title: string,
  paragraph: string,
  image: string,
}

export function Article ({ author, title, paragraph, image }: Props) {
  const content = `${paragraph} Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iste voluptates. Quod sapiente amet pariatur delectus sint, quis saepe dolorem odit, odio laudantium rem natus temporibus dolores dolore repellendus illo!`;

  return (
    <article className={styles.Article}>
      <a className={styles.articleWrapper} href="#">
        <div className={styles.imageBase}>
          <div className={styles.imageLayer}>
            <div className={styles.imageWrapper}>
              <img className={styles.image}
                src={image}
                alt={title}
              />
            </div>
          </div>
        </div>
        <div className={styles.overview}>
          <div className={styles.author}>By {author}</div>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <p className={styles.paragraph}>{content}</p>
        </div>
      </a>
    </article>
  );
}