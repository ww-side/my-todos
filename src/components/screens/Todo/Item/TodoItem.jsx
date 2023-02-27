import React from 'react';
import Check from '../../../UI/Check/Check';
import classes from './TodoItem.module.scss'
import RemoveButton from '../../../UI/RemoveButton/RemoveButton';

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div className={classes.todoItem}>
      <div className={classes.todoItemWrapper} onClick={() => changeTodo(todo.id)}>
      <div><Check isCompleted={todo.isCompleted}/></div>
      <span className={`${classes.todoText} ${todo.isCompleted ? classes.todoTextCompleted : classes.todoText}`}>
        {todo.title}
      </span>
      </div>
      <RemoveButton todo={todo} removeTodo={removeTodo}/>
    </div>
  );
};

export default TodoItem;