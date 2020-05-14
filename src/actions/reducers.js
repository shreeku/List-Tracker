import { CREATE_TODO,
         REMOVE_TODO,
         MARK_COMPLETED,
         LOAD_TODOS_FAILURE,
         LOAD_TODOS_SUCCESS,
         LOAD_TODOS_PROGRESS
} from './action';

export const isLoading = ( state = false, action) => {
  const { type } = action;

  switch(type) {
    case LOAD_TODOS_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
}


export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch(type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }
    case MARK_COMPLETED: {
      const { text } = payload;
      return state.map(todo => {
        if(todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    default:
      return state;
  }
}
