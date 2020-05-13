import React from 'react';
import { todos } from '../actions/reducers';
import { markTodo } from '../actions/action';
import '../styles/TodoListItem.css';

const TodoListItem = ({ todo, onMarkCompleted, onRemovePressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="button-container">
      {todo.isCompleted
        ? null
        : <button className="completed-button"
                 onClick={() => onMarkCompleted(todo.text)
                 }>Completed</button>}
      <button className="remove-button"
              onClick={() => onRemovePressed(todo.text)
              }>Remove</button>
    </div>
  </div>
);

export default TodoListItem;
