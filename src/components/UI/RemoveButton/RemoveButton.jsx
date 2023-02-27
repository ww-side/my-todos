import React from 'react';
import {BsTrash} from "react-icons/bs";
import classes from './RemoveButton.module.scss'

const RemoveButton = ({todo, removeTodo}) => {
  return (
    <div>
      <BsTrash size={24} className={classes.removeButton} onClick={() => removeTodo(todo.id)}/>
    </div>
  );
};

export default RemoveButton;