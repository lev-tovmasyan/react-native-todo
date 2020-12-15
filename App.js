import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import Navbar from "./src/components/Navbar";
import { useStore } from "./src/context/StateProvider";
import { addTodoIdAC, removeTodoAC } from "./src/context/stateReducer";
import MainScreen from "./src/screens/MainScreen";
import TodoInfoScreen from "./src/screens/TodoInfoScreen";

const App = () => {
	const { state, dispatch } = useStore();
	
  return (
    <View style={styles.container}>
      <Navbar />
      {!state.todoId ? (
        <MainScreen removeTodo={removeTodo} setTodoId={setTodoId} />
      ) : (
        <TodoInfoScreen removeTodo={removeTodo} setTodoId={setTodoId} />
      )}
    </View>
  );




  function setTodoId(value) {
    dispatch(addTodoIdAC(value));
  }

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
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
