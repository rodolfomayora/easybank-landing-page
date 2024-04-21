import { Container } from '#components/Container';
import { ArticleGrid } from './ArticleGrid';
import { articles } from './articles';
import styles from './styles.module.scss';

export function ArticleSection () {
  return (
    <section className={styles.ArticleSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Latest Articles</h2>
        <ArticleGrid articles={articles} />
      </Container>
    </section>
  )
}