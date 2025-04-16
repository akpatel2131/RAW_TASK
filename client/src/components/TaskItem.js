import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { toggleComplete, deleteTask } = useContext(TaskContext);

  const handleToggle = () => {
    toggleComplete(task._id, task.completed);
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onClick={handleToggle}
          className="task-checkbox"
        />
        <span className="task-name">{task.name}</span>
      </div>
      <button onClick={handleDelete} className="btn btn-delete">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
