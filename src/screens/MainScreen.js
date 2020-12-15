import React from "react";
import { View } from "react-native";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { useStore } from "../context/StateProvider";
import {addTodoAC} from '../context/stateReducer'

const MainScreen = ({removeTodo, setTodoId}) => {

  const {state, dispatch} = useStore()

  return (
    <View>
      <AddTodo addTodo={addTodo} />
      <TodoList
        removeTodo={removeTodo}
        todos={state.todos}
        setTodoId={setTodoId}
      />
    </View>
  );



  function addTodo(title) {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    dispatch(addTodoAC(newTodo))
  };

};

export default MainScreen;