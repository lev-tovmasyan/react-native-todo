import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

const TodoItem = ({ todo, index, removeTodo, setTodoId }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setTodoId(todo.id)}
      onLongPress={() => removeTodo(todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.todoIndex}>{index + 1}.</Text>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoIndex: {
    marginRight: 10
  }
});
