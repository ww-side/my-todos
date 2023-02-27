import React, {useState} from 'react';
import classes from './CreateTodoField.module.scss'
import AddButton from "../AddButton/AddButton";

const CreateTodoField = ({setTodos}) => {
  const [title, setTitle] = useState('');

  const checkEmptyField = (title, setTodos) => {
    if (title.length === 0) {
      return alert('Fill in the field with the task');
    } else {
      setTodos(item => [{
        id: new Date(),
        title,
        isCompleted: false
      }, ...item]);
    }
  };

  const addTodo = title => {
    checkEmptyField(title, setTodos);
    setTitle('');
  };

  return (
    <div className={classes.inputWrapper}>
      <input
        type='text'
        placeholder='Add a new task..'
        onChange={event => setTitle(event.target.value)}
        value={title}
      />
      <AddButton addTodo={() => addTodo(title)}/>
    </div>
  );
};

export default CreateTodoField;