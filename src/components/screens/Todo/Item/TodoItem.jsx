import React from 'react';
import Check from "../../UI/Check/Check";

const TodoItem = ({todo}) => {
  return (
    <div>
      <Check/>
      {todo.title}
    </div>
  );
};

export default TodoItem;