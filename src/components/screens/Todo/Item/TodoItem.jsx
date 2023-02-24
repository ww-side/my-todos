import React from 'react';
import Check from '../../../UI/Check/Check';
import classes from './TodoItem.module.scss'

const TodoItem = ({todo}) => {
  return (
    <div className={classes.TodoItem}>
      <Check/>
      {todo.title}
    </div>
  );
};

export default TodoItem;