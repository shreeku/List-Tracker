import { loadTodosSuccess, loadTodosProgress, loadTodosFailure } from './action';

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosProgress());
    // TODO: Add to .env the local server url
    // Tricky, can't require 'custom-env' here
    // since "fs: statSync issue
    const response = await fetch('https://localhost:8080/todos');
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch(e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = () => (text) => {
  alert(`{text} was marked as completed !!!`);
};
