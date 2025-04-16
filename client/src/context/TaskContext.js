import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

// Create axios instance with base URL
// Set default axios config
axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.withCredentials = true;

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { isAuthenticated } = useContext(AuthContext);

  // Fetch tasks when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();
    } else {
      setTasks([]);
      setLoading(false);
    }
  }, [isAuthenticated]);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching tasks');
      setLoading(false);
    }
  };

  // Add new task
  const addTask = async (name) => {
    try {
      setError(null);
      const res = await axios.post('/api/tasks', { name });
      setTasks([res.data, ...tasks]);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding task');
      return false;
    }
  };

  // Toggle task completion
  const toggleComplete = async (id, completed) => {
    try {
      setError(null);
      const res = await axios.put(`/api/tasks/${id}`, {
        completed: !completed
      });
      
      setTasks(tasks.map(task => 
        task._id === id ? res.data : task
      ));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating task');
      return false;
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      setError(null);
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error deleting task');
      return false;
    }
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks,
        addTask,
        toggleComplete,
        deleteTask,
        clearError
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
