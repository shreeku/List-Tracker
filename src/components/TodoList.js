import React, { useEffect } from 'react';
import NewForm from './NewForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo, markTodo } from '../actions/action';
import { displayAlert, loadTodos } from '../actions/thunks';
import '../styles/TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onMarkCompleted, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading Todos ...</div>;
  const content = (
      <div className="list-wrapper">
        <NewForm />
        {todos.map(todo => <TodoListItem todo={todo}
                                         onRemovePressed={onRemovePressed}
                                         onMarkCompleted={onMarkCompleted} />)}
      </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading
});
const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos),
  onRemovePressed: text => dispatch(removeTodo(text)),
  onMarkCompleted: text => dispatch(markTodo(text), displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
