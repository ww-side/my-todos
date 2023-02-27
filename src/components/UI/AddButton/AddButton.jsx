import React from 'react';
import classes from './AddButton.module.scss';

const AddButton = ({addTodo, title}) => {

  return (
    <button className={classes.AddButton} onClick={() => addTodo(title)}>
      +
    </button>
  );
};

export default AddButton;