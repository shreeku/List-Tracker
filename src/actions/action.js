export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: { text }
});

export const MARK_COMPLETED = 'MARK_COMPLETED';
export const markTodo = text => ({
  type: MARK_COMPLETED,
  payload: { text }
});

export const LOAD_TODOS_PROGRESS = 'LOAD_TODOS_PROGRESS';
export const loadTodosProgress = () => ({
  type: LOAD_TODOS_PROGRESS
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos }
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE
});
