import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const AddTask = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Task name cannot be empty');
      return;
    }
    
    const success = await addTask(name);
    if (success) {
      setName('');
      setError('');
    }
  };

  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit}>
        <div className="add-task-input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            placeholder="Add a new task..."
            className="add-task-input"
          />
          <button type="submit" className="btn btn-add">
            Add Task
          </button>
        </div>
        {error && <div className="error-text">{error}</div>}
      </form>
    </div>
  );
};

export default AddTask;
