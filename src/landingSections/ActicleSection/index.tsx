import React, { FC } from 'react';
import { Container } from '../../components';
import style from './style.module.scss';

const ActicleSection: FC = () => (
  <section className={style.ActicleSection}>
    <Container>
      <h2>Latest Articles</h2>
    </Container>
  </section>
)

export default ActicleSection;