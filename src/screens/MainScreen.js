import React from "react";
import { View } from "react-native";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const MainScreen = () => {

  return (
    <View>
      <AddTodo />
      <TodoList />
    </View>
  );
};

export default MainScreen;
