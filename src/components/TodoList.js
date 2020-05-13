import React from 'react';
import NewForm from './NewForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo, markTodo } from '../actions/action';
import { displayAlert } from '../actions/thunks';
import '../styles/TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onMarkCompleted }) => (
  <div className="list-wrapper">
    <NewForm />
    {todos.map(todo => <TodoListItem todo={todo}
                                     onRemovePressed={onRemovePressed}
                                     onMarkCompleted={onMarkCompleted} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onMarkCompleted: text => dispatch(markTodo(text), displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
