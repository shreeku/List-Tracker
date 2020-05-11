import React from 'react';
import NewForm from './NewForm';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.css'

const TodoList = ({ todos = [{text: 'Hello'}] }) => (
  <div className="list-wrapper">
    <NewForm />
    {todos.map(todo => <TodoListItem todo={todo} />)}
  </div>
);

export default TodoList;
