import React from "react";
import { View, StyleSheet } from "react-native";
import Navbar from "./src/components/Navbar";
import { useStore } from "./src/context/StateProvider";
import MainScreen from "./src/screens/MainScreen";
import TodoInfoScreen from "./src/screens/TodoInfoScreen";

const Main = () => {
  const { state } = useStore();

  return (
    <View style={styles.container}>
      <Navbar />
      {!state.todoId ? <MainScreen /> : <TodoInfoScreen />}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
