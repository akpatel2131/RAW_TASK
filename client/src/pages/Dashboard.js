import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';
import TaskItem from '../components/TaskItem';
import AddTask from '../components/AddTask';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { tasks, loading, error } = useContext(TaskContext);
  const { logout } = useContext(AuthContext);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const navigate = useNavigate();


  // Filter tasks based on completion status
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>My Todo List</h1>
        <button onClick={handleLogout} className="btn btn-logout">
          Logout
        </button>
      </div>

      <AddTask />

      <div className="task-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`} 
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="loading">Loading tasks...</div>
      ) : (
        <div className="task-list">
          {filteredTasks.length === 0 ? (
            <p className="no-tasks">No tasks found.</p>
          ) : (
            filteredTasks.map(task => (
              <TaskItem key={task._id} task={task} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
