import React, { FC } from 'react';
import FeatureBockProps from './type';
import style from './style.module.scss';

const FeatureBlock: FC<FeatureBockProps> = ({
  title,
  description,
  icon: Icon
}) => (
  <section className={style.FeatureBlock}>
    <Icon />
    <h3 className={style.featureTittle}>{title}</h3>
    <p className={style.featureDescription}>{description}</p>
  </section>
)

export default FeatureBlock;