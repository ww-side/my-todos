import React, {useState} from 'react';
import TodoItem from './Item/TodoItem';
import classes from './Todo.module.scss'
import CreateTodoField from "../../UI/CreateTodoField/CreateTodoField";

const data = [
  {
    id: 643,
    title: 'Take a couple of notes',
    isCompleted: false
  },
  {
    id: 345,
    title: 'Smile',
    isCompleted: false
  },
];

const Todo = () => {
  const [todos, setTodos] = useState(data);

  const changeTodoIsCompleted = id => {
    const copyTodos = [...todos];
    const current = copyTodos.find(item => item.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copyTodos);
  };

  const removeTodo = id => setTodos([...todos].filter(item => item.id !== id));

  return (
    <div className={classes.todo}>
      <h1>ToDo List</h1>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodoIsCompleted}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos}/>
    </div>
  );
};

export default Todo;