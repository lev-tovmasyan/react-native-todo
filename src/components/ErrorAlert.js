import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useStore } from "../context/StateProvider";
import { THEME } from "../theme";

const ErrorAlert = ({ text }) => {
  const { loadTodos } = useStore();

  return (
    <View style={styles.center}>
      <Text style={styles.error}>{text}</Text>
      <TouchableOpacity style={styles.errorButton} onPress={loadTodos}>
        <Text style={styles.errorButtonText}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorAlert;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: THEME.DANGER_COLOR,
    fontSize: 20,
  },
  errorButton: {
    marginTop: 20,
    backgroundColor: THEME.MAIN_COLOR,
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  errorButtonText: {
    color: "white",
  },
});
