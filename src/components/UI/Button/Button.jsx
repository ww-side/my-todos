import React from 'react';
import classes from './Button.module.scss'

const Button = ({text}) => {
  return (
    <button className={classes.button}>
      <span className={classes.text}>
        {text}
      </span>
    </button>
  );
};

export default Button;