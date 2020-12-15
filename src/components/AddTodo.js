import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import { THEME } from "../theme";
import { AntDesign } from '@expo/vector-icons'

const AddTodo = ({ addTodo }) => {

  const [inputValue, setInputValue] = useState("");

  const pressHandler = () => {
    if(inputValue.trim()){
      addTodo(inputValue)
      setInputValue('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Todo Title Cannot Be Empty!')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput 
        placeholder='Todo Title'
        value={inputValue} 
        onChangeText={value => setInputValue(value)} 
        style={styles.input} 
        autoCorrect={false}
        />
      <TouchableOpacity 
      onPress={pressHandler} 
      style={styles.button}>
        <AntDesign name='pluscircleo' style={styles.plusIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    height: 40,
    paddingHorizontal: 10
  },
  input: {
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    width: "67%",
    padding: 10,
  },
  button: {
    width: "30%",
    backgroundColor: THEME.MAIN_COLOR,
    height: "100%",
    borderRadius: 5,
    marginLeft: "3%",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center'
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  plusIcon: {
    color: 'white',
    fontSize: 16
  }
});
