/** Action types **/
const ADD_TODO = "ADD_TODO";
const CHANGE_TODO = "CHANGE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const ADD_TODO_ID = "ADD_TODO_ID";
const FETCH_TODOS = 'FETCH_TODOS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_ERROR = 'TOGGLE_ERROR';


/** Actions **/
export const addTodoAC = (payload) => ({ type: ADD_TODO, payload });
export const changeTodoAC = (payload) => ({ type: CHANGE_TODO, payload });
export const removeTodoAC = (payload) => ({ type: REMOVE_TODO, payload });
export const addTodoIdAC = (payload) => ({ type: ADD_TODO_ID, payload });
export const fetchTodosAC = (payload) => ({ type: FETCH_TODOS, payload });
export const toggleLoadingAC = (payload) => ({ type: TOGGLE_LOADING, payload });
export const toggleErrorAC = (payload) => ({ type: TOGGLE_ERROR, payload });



export default function stateReducer(state, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === payload.id) {
            item.title = payload.title;
          }
          return item;
        }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    case FETCH_TODOS:
      return { ...state, todos: payload };
    case ADD_TODO_ID:
      return { ...state, todoId: payload };
    case TOGGLE_LOADING:
      return { ...state, loading: payload };
    case TOGGLE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
