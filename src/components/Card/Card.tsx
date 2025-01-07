import React from 'react';
import { MobileDevIcon } from '../../assets';
import Styles from './card.module.scss';

type cardCompoent = {
  varient: boolean;
  title: string;
  subTitle: string;
};

const Card: React.FC<cardCompoent> = ({ varient, title, subTitle }) => {
  return (
    <div className={varient ? Styles.cardVarient : Styles.cardContainer}>
      {/* icon */}
      <img className={Styles.cardImage} src={MobileDevIcon} />
      {/* title */}
      <p className={Styles.title}>Developing Products</p>
      {/* sub title */}
      <p className={Styles.subTitle}>
        Building responsive, robust, and scalable websites tailored to your
        needs.
      </p>
    </div>
  );
};

export default Card;
