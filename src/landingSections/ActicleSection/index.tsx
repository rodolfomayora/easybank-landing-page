import React, { FC } from 'react';
import { Container, Acticle, GridLayout } from '../../components';
import style from './style.module.scss';
import sampleData from './sampleData';

const ActicleSection: FC = () => {

  const addId = (item: object, index: number) => {
    return {
      ...item,
      customId: index.toString()
    }
  }

  const articles: Array<object> = sampleData.map(addId);

  return (
    <section className={style.ActicleSection}>
      <Container>
        <h2 className={style.sectionTitle}>Latest Articles</h2>
        <GridLayout>
        {
          articles.map(({
            customId: id,
            author,
            title,
            paragraph,
            image
          }: any) => (
            <Acticle
              key={id}
              author={author}
              title={title}
              paragraph={paragraph}
              image={image}
            />
          ))
        }
        </GridLayout>
      </Container>
    </section>
  )
}

export default ActicleSection;