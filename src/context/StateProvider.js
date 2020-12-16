import React, { useCallback, useContext, useEffect, useReducer } from "react";
import { Alert } from "react-native";
import { instance } from "../api";
import stateReducer, {
  addTodoAC,
  addTodoIdAC,
  changeTodoAC,
  removeTodoAC,
  fetchTodosAC,
  toggleLoadingAC,
  toggleErrorAC,
} from "./stateReducer";

const StateContext = React.createContext(null);

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

  useEffect(() => {
    loadTodos()
  }, [])

  const setTodoId = (value) => dispatch(addTodoIdAC(value));
  
  const addTodo = async (title) => {
    toggleError(null)
    try {
      const {name} = await instance.post('todos.json', JSON.stringify({ title })).then(res => res.data).catch()
      dispatch(addTodoAC({id: name, title}))
    } catch (error) {
      toggleError('Something Went Wrong...')
      console.log('addTodo Error', err)
    }

  };

  const fetchTodos = async () => {
    toggleLoading(true)
    toggleError(null)
    try {
      const data = await instance.get('todos.json').then(res => res.data)
      const todos = Object.keys(data).map(key => ({...data[key], id: key}))
      dispatch(fetchTodosAC(todos))

    } catch (err) {
      toggleError('Something Went Wrong...')
      console.log('fetchTodos Error', err)

    } finally {
      toggleLoading(false)
    }
  };

  const changeTodo = async (id, title) => {
    toggleError(null)
    try {
      await instance.patch(`todos/${id}.json`, JSON.stringify({ title })).then(res => res.data)
       dispatch(changeTodoAC({ id, title }))
    } catch (err) {
      toggleError('Something Went Wrong...')
      console.log('changeTodo Error', err)
    }

    };

  const toggleLoading = (value) => dispatch(toggleLoadingAC(value));
  const toggleError = (value) => dispatch(toggleErrorAC(value));

  return (
    <StateContext.Provider
      value={{
        state,
        setTodoId,
        addTodo,
        changeTodo,
        removeTodo,
        fetchTodos,
        loading: state.loading,
        error: state.error,
        loadTodos
      }}
    >
      {children}
    </StateContext.Provider>
  );

  function removeTodo(id) {
    Alert.alert(
      "Remove Title",
      "are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            state.todoId && setTodoId(null);
            instance.delete(`todos/${id}.json`)
            dispatch(removeTodoAC(id));
          },
        },
      ],
      { cancelable: false }
    );
  }
}

export default StateProvider;

// custom hook
export const useStore = () => {
  return useContext(StateContext);
};

const initialState = {
  todoId: null,
  todos: [],
  loading: false,
  error: null,
};
