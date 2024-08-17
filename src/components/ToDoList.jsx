import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleUpdateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: currentTodo.text } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-gradient-to-br from-slate-200 to-blue-200  shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">To-Do List</h2>
      {isEditing ? (
        <div className="mb-4">
          <input
            type="text"
            value={currentTodo.text}
            onChange={handleEditInputChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
          />
          <button
            onClick={handleUpdateTodo}
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Add a new to-do"
          />
          <button
            onClick={handleAddTodo}
            className="w-full bg-green-500 text-white p-2 rounded-md"
          >
            Add
          </button>
        </div>
      )}
      <ul>
        {todos.map((todo) => (
         <ToDoItem todo = {todo} handleToggleComplete={handleToggleComplete} handleEditTodo={handleEditTodo}  handleDeleteTodo={handleDeleteTodo}/>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
