import React from 'react';
import Style from './Button.module.scss';

interface Props {
  title: string;
  onPress?: () => void; // Corrected type
  varient?: boolean; // Optional prop
}

const Button: React.FC<Props> = ({
  title,
  onPress = () => {},
  varient = false,
}) => {
  return (
    <div
      onClick={onPress}
      className={varient ? Style.varientContainer : Style.buttonContainer}
    >
      <h6 className={varient ? Style.varientTitle : Style.title}>{title}</h6>
    </div>
  );
};

export default Button;
