import React, {useState} from 'react';
import classes from './CreateTodoField.module.scss'

const CreateTodoField = ({setTodos}) => {
  const [title, setTitle] = useState('');

  const addTodo = title => {
    setTodos(prev => [{
      id: new Date(),
      title,
      isCompleted: false
    }, ...prev]);
    setTitle('');
  };

  return (
    <div className={classes.inputWrapper}>
      <input
        type='text'
        placeholder='Add a new task..'
        onChange={event => setTitle(event.target.value)}
        value={title}
        onKeyPress={event => event.key === 'Enter' && addTodo(title)}
      />
    </div>
  );
};

export default CreateTodoField;