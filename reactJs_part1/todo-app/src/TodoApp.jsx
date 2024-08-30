import { useState } from 'react';

function TodoApp() {
  const [taskList, updateTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleInputUpdate = (event) => {
    setCurrentTask(event.target.value);
  };

  const addTaskToList = () => {
    if (currentTask.trim() !== '') {
      updateTaskList([...taskList, currentTask]);
      setCurrentTask('');
    }
  };

  const removeTaskFromList = (taskIndex) => {
    const updatedTaskList = taskList.filter((_, index) => index !== taskIndex);
    updateTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={currentTask}
        onChange={handleInputUpdate}
        placeholder="Enter a new task"
      />
      <button onClick={addTaskToList}>Add Task</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTaskFromList(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
