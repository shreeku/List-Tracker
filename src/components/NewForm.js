import React, { useState } from 'react';
import '../styles/NewForm.css';

const NewForm = () => {
  const [inputValue, setInputValue] = useState('');
  return (
  <div className="new-form">
    <input className="new-form-input"
           type="text"
           placeholder="Type new todo . . ."
           value={inputValue}
           onChange={e => setInputValue(e.target.value)} />
    <button className="create-new-todo">Create Todo</button>
  </div>
  );
}

export default NewForm;
