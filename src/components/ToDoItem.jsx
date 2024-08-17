import React from 'react'

const ToDoItem = (props) => {
  return (
    <li
    key={props.todo.id}
    className="flex justify-between items-center p-2 border-b border-gray-200"
  >
    <span
      className={`flex-1 ${props.todo.completed ? 'line-through' : ''}`}
    >
      {props.todo.text}
    </span>
    <button
      onClick={() => props.handleToggleComplete(props.todo.id)}
      className={`mx-2 p-2  text-white ${
        props.todo.completed ? 'bg-green-400 rounded-full' : 'bg-gray-500 rounded-md'
      }`}
    >
      {props.todo.completed ? '✔' : 'Complete'}
    </button>
    <button
      onClick={() => props.handleEdit(props.todo)}
      className="mx-2 p-1 bg-blue-500 text-white rounded-md"
    >
      Edit
    </button>
    <button
      onClick={() => props.handleDelete(props.todo.id)}
      className="mx-2 p-1 bg-red-500 text-white rounded-md"
    >
      Delete
    </button>
  </li>
  )
}

export default ToDoItem