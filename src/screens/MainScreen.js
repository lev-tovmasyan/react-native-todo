import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import AddTodo from "../components/AddTodo";
import AppLoader from "../components/AppLoader";
import ErrorAlert from "../components/ErrorAlert";
import TodoList from "../components/TodoList";
import { useStore } from "../context/StateProvider";

const MainScreen = () => {

  const {loading, error} = useStore()


  if(loading) {
    return <AppLoader />
  }

  if(error) {
    return <ErrorAlert text={error} />
  }

  return (
    <View style={{flex: 1}}>
      <AddTodo />
      <TodoList />
    </View>
  );
};

export default MainScreen;
