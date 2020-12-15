import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useStore } from "../context/StateProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const {state, removeTodo, setTodoId} = useStore()

  let content = (
    <FlatList
      style={styles.todoList}
      data={state.todos}
      renderItem={({ item, index }) => (
        <TodoItem
          index={index}
          todo={item}
          removeTodo={removeTodo}
          setTodoId={setTodoId}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );

  if (!state.todos.length) {
    content = (
      <View style={styles.noItemWrap}>
        <Text style={styles.noTodoText}>No Todos</Text>
        <Image style={styles.image} source={require('../../assets/noItem.png')} />
      </View>
    );
  }

  return (
    <View>
      {content}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todoList: {
    padding: 10,
    marginBottom: 10,
  },
  noTodoText: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
  noItemWrap: {
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 300,
    marginTop: 40,
    resizeMode: 'contain',
  }
});
