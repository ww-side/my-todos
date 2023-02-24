import React from 'react';
import {BsCheck} from 'react-icons/bs';
import classes from './Check.module.scss'

const Check = ({isCompleted}) => {
  return (
    <div className={classes.checkRadius}>
      {isCompleted &&
        <BsCheck size={24} className={classes.checkColor}/>
      }
    </div>
  );
};

export default Check;