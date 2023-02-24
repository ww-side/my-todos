import React from 'react';
import TodoItem from './Item/TodoItem';
import classes from './Todo.module.scss'

const todos = [
  {
    id: 0,
    title: 'Send message at 5 am',
    isCompleted: false
  },
  {
    id: 1,
    title: 'Read the new book',
    isCompleted: false
  },
  {
    id: 2,
    title: 'English',
    isCompleted: false
  }
];

const Todo = () => {
  return (
    <div className={classes.Todo}>
      <div>
        <h1>ToDo List</h1>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </div>
    </div>
  );
};

export default Todo;