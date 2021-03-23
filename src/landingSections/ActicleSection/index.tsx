import React, { FC } from 'react';
import { Container, Acticle } from '../../components';
import style from './style.module.scss';
import sampleData from './sampleData';

const ActicleSection: FC = () => (
  <section className={style.ActicleSection}>
    <Container>
      <h2>Latest Articles</h2>
      <div>
      {
        sampleData.map(({ id, author, title, overview, image }: any) => (
          <Acticle
            key={id.toString()}
            author={author}
            title={title}
            overview={overview}
            image={image}
          />
        ))
      }
      </div>
    </Container>
  </section>
)

export default ActicleSection;