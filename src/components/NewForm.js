import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/action';
import '../styles/NewForm.css';

const NewForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');
  return (
  <div className="new-form">
    <input className="new-form-input"
           type="text"
           placeholder="Type new todo . . ."
           value={inputValue}
           onChange={e => setInputValue(e.target.value)} />
    <button className="create-new-todo"
            onClick={() => {
              const isDuplicateText =
                todos.some(todo => todo.text === inputValue);
              if(!isDuplicateText) {
                onCreatePressed(inputValue);
                setInputValue('');
              }
              else {
                alert("Todo Exists Already !!!");
              }
            }}>Create Todo</button>
  </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewForm);
