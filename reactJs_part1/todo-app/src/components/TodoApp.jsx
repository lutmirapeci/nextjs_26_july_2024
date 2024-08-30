import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 

  
  const handleInputChange = (event) => {
    setNewTodo(event.target.value); 
  };

  const addTodo = () => {
    newTodo.trim() !== '' ? (
      (setTodos([...todos, newTodo]), setNewTodo(''))
    ) : null;
  };

  
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos); 
  };

  return (
    <div>
      <h1>Todo Manager</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
  
export default TodoApp;
