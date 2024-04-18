import { Article } from '#components/Article';
import { Container } from '#components/Container';
import { GridLayout } from '#components/GridLayout';
import styles from './styles.module.scss';
import sampleData from './sampleData';

export function ArticleSection () {

  const addId = (item: object, index: number) => {
    return {
      ...item,
      customId: index.toString()
    }
  }

  const articles: Array<object> = sampleData.map(addId);

  return (
    <section className={styles.ArticleSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Latest Articles</h2>
        <GridLayout>
        {
          articles.map(({
            customId: id,
            author,
            title,
            paragraph,
            image
          }: any) => (
            <Article
              key={id}
              author={author}
              title={title}
              paragraph={paragraph}
              image={`${import.meta.env.BASE_URL}${image}`}
            />
          ))
        }
        </GridLayout>
      </Container>
    </section>
  )
}