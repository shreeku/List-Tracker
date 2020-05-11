import React from 'react';
import '../styles/TodoListItem.css';

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="button-container">
      <button className="completed-button">Completed</button>
      <button className="remove-button">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
