import React, { FC } from 'react';
import { Container, ButtonInvitation } from '../../components';
import { mokcups } from '../../assets/img';
import style from './style.module.scss';

const MainSection: FC = () => (
  <section className={style.MainSection}>
    <div className={style.imageBase}>
      <div className={style.imageLayer}>
        <div className={style.imageBackground}></div>
        <img className={style.mockups}
          src={mokcups}
          alt="App Mockup"
        />
      </div>
    </div>
    <Container>
      <div className={style.introInformation}>
        <h1 className={style.mainTitle}>Next generation digital banking</h1>
        <p className={style.information}>Take your financial life online. Your Easybank account will be a one-top-shop for spending, saving, budgeting, investing, and much more</p>
        <ButtonInvitation />
      </div>
    </Container>
  </section>
)

export default MainSection;