import React, { useContext, useReducer } from "react";
import { Alert } from "react-native";
import stateReducer, {
  addTodoAC,
  addTodoIdAC,
  changeTodoAC,
  removeTodoAC,
} from "./stateReducer";

const StateContext = React.createContext(null);



function StateProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setTodoId = (value) => dispatch(addTodoIdAC(value));
  const addTodo = (title) => dispatch(addTodoAC(title));
  const changeTodo = (id, value) => dispatch(changeTodoAC({ id, value }));


  
  return (
    <StateContext.Provider value={{ state, setTodoId, addTodo, changeTodo, removeTodo }}>
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
          onPress: () => {
            state.todoId && setTodoId(null);
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
};
