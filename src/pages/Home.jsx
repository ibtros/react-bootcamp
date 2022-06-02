import { Todo } from '../components/Todo';
import { useState } from 'react';

export const Home = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length > 1) {
      console.log('todo: ', todo);
      setTodoList([...todoList, todo]); // El cambio no parece ser instantaneo sobre todoList
      console.log('todoList: ', todoList);
      setTodo('');  
    }
  }

  const handleDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='todo'
          placeholder='Add a Todo'
          onChange={handleInputChange}
          value={todo}
        />
        <button type="submit">+</button>
      </form>
      {
        todoList.map((todo, index) => 
          <Todo key={todo} todo={todo} onDelete={() => handleDelete(index)} />
        )
      }
    </div>
  )
};
