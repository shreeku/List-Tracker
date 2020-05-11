import { hot } from 'react-hot-loader/root'
import React from 'react';
import TodoList from './components/TodoList';
import './App.css';


const App = () => (
  <div className="App">
    <TodoList />
  </div>
);

export default hot(App);
